import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";

const JobDetailsCard = ({ job }) => {
  const { _id, jobBannerURL, jobTitle, postedBy, postedEmail, companyLogo, jobCategory, salaryRange, jobDescription, postingDate, applicationDeadline, jobApplicantsNumber } = job;
  let ApplicantsNumber = jobApplicantsNumber;

  const { user } = useContext(AuthContext);
  const [resume, setResume] = useState("");
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    fetch(`https://jobnest110-server.vercel.app/appliedjobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        let exist = data.find((dat) => dat.jobId == _id);
        if (exist) {
          setApplied(true);
        } else {
          setApplied(false);
        }
      });
  }, []);

  const handleApply = (e) => {
    e.preventDefault();
    const appliedJob = { email: user.email, name: user.displayName, resume, jobId: _id, jobTitle, jobCategory, salaryRange, jobDescription, postingDate, applicationDeadline };
    if (new Date(applicationDeadline) < new Date()) {
      toast.error("Application Deadline is Over");
      return;
    } else {
      fetch("https://jobnest110-server.vercel.app/addappliedjob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appliedJob),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            fetch(`https://jobnest110-server.vercel.app/jobs/increment/${_id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount) {
                  setApplied(true);
                  document.getElementById("my_modal_1").close();
                  toast.success("Applied Successfully");
                  ApplicantsNumber += 1;
                  document.getElementById("applicantsNumber").innerText = ApplicantsNumber;
                }
              });
          }
        });
    }
  };

  return (
    <div className=' bg-white rounded-lg overflow-hidden shadow-lg mx-auto mt-4'>
      <img
        src={jobBannerURL}
        alt={jobTitle}
        className='w-full h-[50vh] object-cover'
      />
      <div className='flex flex-col md:flex-row justify-between gap-12 p-6'>
        <div className='space-y-4 '>
          <div>
            <h2 className='text-3xl font-semibold'>{jobTitle}</h2>
            <p className='text-xs bg-primary inline-block p-1 rounded-md text-white'>{jobCategory}</p>
            <p className=' text-gray-600'>Posted on: {`${new Date(job.postingDate).toLocaleDateString()}`}</p>
          </div>

          <div>
            <p className='font-bold text-xl'>Job Description:</p>
            <p>{jobDescription}</p>
          </div>
          <div>
            <p className=' font-bold text-xl'>Salary Range:</p>
            <p>{salaryRange}</p>
          </div>

          <p className='font-bold text-gray-600'> </p>
          <p className=''>
            Application Deadline: <span className='text-green-500 font-bold'>{`${new Date(job.applicationDeadline).toLocaleDateString()}`}</span>
          </p>
        </div>
        <div className='space-y-4 p-2 border rounded-md border-primary min-w-[25%] flex flex-col items-center justify-center'>
          <p className=' font-bold text-xl'>Company Details</p>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              <img src={companyLogo} />
            </div>
          </div>
          <p className='text-gray-500'>{postedBy}</p>
          <p className=' text-gray-600'>
            Job Applicants: <span id='applicantsNumber'>{ApplicantsNumber}</span>
          </p>

          {postedEmail != user.email &&
            (applied ? (
              <p className='p-2 rounded-md cursor-not-allowed text-white bg-green-500 border-0 '>Applied</p>
            ) : (
              <button
                className='btn  text-white bg-primary border-0 hover:bg-black'
                onClick={() => document.getElementById("my_modal_1").showModal()}
              >
                Apply Now
              </button>
            ))}
        </div>
      </div>
      <dialog
        id='my_modal_1'
        className='modal'
      >
        <div className='modal-box'>
          <div className='modal-action'>
            <form
              method='dialog'
              className='space-y-2'
              onSubmit={handleApply}
            >
              <input
                type='text'
                value={user.displayName}
                disabled
                className='w-full text-center px-3 py-2 border rounded-lg bg-gray-400'
              />
              <input
                type='text'
                value={user.email}
                disabled
                className='w-full text-center px-3 py-2 border rounded-lg bg-gray-400'
              />

              <input
                type='text'
                placeholder='Please Enter Your Resume Link'
                required
                onChange={(e) => {
                  setResume(e.target.value);
                  console.log(resume);
                }}
                className='w-full text-center px-3 py-2 border rounded-lg'
              />

              <button className='btn w-full bg-primary text-white hover:bg-black'>Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetailsCard;
