import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const AppliedJobPage = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [jobs, setJobs] = useState("");
  const [Alljobs, setAllJobs] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/appliedjobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setAllJobs(data);
      });
  }, []);

  const handleChange = (e) => {
    if (!e.target.value || e.target.value === "") {
      setSelectedCategory(e.target.value);
      setJobs(Alljobs);
      return;
    } else {
      setSelectedCategory(e.target.value);
      let filteredJob = Alljobs.filter((job) => job.jobCategory == e.target.value);
      setJobs(filteredJob);
    }
  };

  return (
    <div>
      <Helmet>
        <title>JobNest | Applied Jobs</title>
      </Helmet>

      <div
        className='hero mb-10 rounded-md '
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay rounded-md  bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content py-10'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold '>Applied Jobs</h1>
            <p className='mb-5'>Check and track the jobs you apllied</p>
            <div className='join border border-primary'>
              <input
                className='input input-bordered join-item text-black'
                placeholder='Filter Job'
                value='Filter Job By Category'
                readOnly
              />
              <select
                className='select select-bordered join-item text-black'
                value={selectedCategory}
                onChange={handleChange}
              >
                <option value=''>Select Category</option>
                <option value='On Site'>On Site</option>
                <option value='Remote'>Remote</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Hybrid'>Hybrid</option>
              </select>
            </div>
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

                    <th className=' py-3 text-left text-xs font-medium uppercase'>Details</th>
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
                      <td className='pr-4 py-4 whitespace-nowrap'>
                        <Link to={`/jobs/${job.jobId}`}>
                          <button className='p-2 bg-primary rounded-md text-white'>Details</button>
                        </Link>
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

export default AppliedJobPage;
