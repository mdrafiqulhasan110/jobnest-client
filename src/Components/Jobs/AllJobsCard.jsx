const AllJobsCard = ({ job }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 my-4'>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold'>{job.jobTitle}</h2>
        <p className='text-gray-600'>{job.postedBy}</p>
      </div>
      <div className='mb-4'>
        <p className='text-gray-700'>Posting Date: {job.postingDate}</p>
        <p className='text-gray-700'>Application Deadline: {job.applicationDeadline}</p>
        <p className='text-gray-700'>Salary Range: {job.salaryRange}</p>
      </div>
      <div>
        <a
          href={job.detailsButton}
          className='text-blue-600 hover:underline'
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default AllJobsCard;
