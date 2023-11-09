import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobPage = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jobnest110-server.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jobnest110-server.vercel.app/jobs/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((res) => {
            if (res.deletedCount === 1) {
              Swal.fire("Deleted!", "Job has been deleted.", "success");
              fetch(`https://jobnest110-server.vercel.app/jobs?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                  setJobs(data);
                });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>JobNest | My Jobs</title>
      </Helmet>
      <div
        className='hero mb-10 rounded-md '
        style={{ backgroundImage: "url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay rounded-md  bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content py-10'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold '>My Jobs</h1>
            <p className='mb-5'>Manage Your Jobs Here</p>
          </div>
        </div>
      </div>
      {jobs.length > 0 ? (
        <>
          <div>
            <div className='overflow-x-auto'>
              <table className='table min-w-full '>
                <thead className='bg-gray-200 text-black font-bold'>
                  <tr className='border-b border-primary'>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Job Title</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Job Category</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Salary Range</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Posting Date</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Deadline</th>

                    <th className=' py-3 text-left text-xs font-medium uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {jobs.map((job, index) => (
                    <tr
                      key={index}
                      className='border-b border-primary'
                    >
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.jobTitle}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.jobCategory}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.salaryRange}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{`${new Date(job.postingDate).toLocaleDateString()}`}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{`${new Date(job.applicationDeadline).toLocaleDateString()}`}</td>
                      <td className='pr-4 py-4 whitespace-nowrap flex gap-2'>
                        <button
                          onClick={() => {
                            navigate(`/jobs/${job._id}`);
                          }}
                        >
                          <AiOutlineEye />
                        </button>
                        <button
                          onClick={() => {
                            navigate(`/updatejob/${job._id}`);
                          }}
                        >
                          <AiOutlineEdit />
                        </button>
                        <button onClick={() => handleDelete(job._id)}>
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className='p-10 text-center font-bold text-3xl'>No Job Found</p>
      )}
    </div>
  );
};

export default MyJobPage;
