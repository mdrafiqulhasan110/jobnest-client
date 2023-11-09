import { Link } from "react-router-dom";

const JobTable = ({ jobs }) => {
  console.log(jobs);
  return (
    <div>
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
                      <td className='pr-4 py-4 whitespace-nowrap'>{`${new Date(job.postingDate).toLocaleDateString()}`}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{`${new Date(job.applicationDeadline).toLocaleDateString()}`}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.postedBy}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>
                        <Link to={`/jobs/${job._id}`}>
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

export default JobTable;
