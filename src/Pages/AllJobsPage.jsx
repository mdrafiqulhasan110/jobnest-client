import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const AllJobsPage = () => {
  const Alljobs = [
    {
      postedBy: "John Doe",
      jobTitle: "Software Engineer",
      postingDate: "2023-11-01",
      applicationDeadline: "2023-11-15",
      salaryRange: "$80,000 - $100,000",
      detailsButton: "/job-details/1",
    },
    {
      postedBy: "Alice Smith",
      jobTitle: "Product Manager",
      postingDate: "2023-11-02",
      applicationDeadline: "2023-11-16",
      salaryRange: "$90,000 - $120,000",
      detailsButton: "/job-details/2",
    },
    // Add more job data here
  ];
  const [inputValue, setInputValue] = useState("");
  const [jobs, setJobs] = useState(Alljobs);

  const handleInputChange = (e) => {
    console.log(e.target.value.toLowerCase());
    setInputValue(e.target.value.toLowerCase());
    if (e.target.value.length < 3) {
      setJobs([...Alljobs]);
    }
  };

  const handleSearch = () => {
    if (inputValue.length < 3) {
      toast.info("Please enter at least three characters");
      return;
    }
    let filteredJob = Alljobs.filter((job) => job.jobTitle.toLowerCase().includes(inputValue));
    setJobs(filteredJob);
  };

  return (
    <div>
      <Helmet>
        <title>JobNest | All Jobs</title>
      </Helmet>

      <div
        className='hero mb-10 rounded-md '
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay rounded-md  bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content py-10'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold '>All Jobs</h1>
            <p className='mb-5'>Find and Apply on your Dream Job</p>
            <div className='join border border-primary'>
              <input
                className='input input-bordered join-item text-black'
                placeholder='Search By Job Title'
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className='btn join-item bg-primary hover:bg-black text-white'
                onClick={() => handleSearch()}
              >
                Search
              </button>
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
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Salary Range</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Posting Date</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Deadline</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Posted By</th>
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
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.salaryRange}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.postingDate}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.applicationDeadline}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.postedBy}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>
                        <a
                          href={job.detailsButton}
                          className='text-blue-600 hover:underline'
                        >
                          Details
                        </a>
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

export default AllJobsPage;
