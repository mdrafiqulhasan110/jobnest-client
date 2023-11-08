const JobDetailsCard = ({ job }) => {
  const { jobBannerURL, jobTitle, postedBy, companyLogo, jobCategory, salaryRange, jobDescription, postingDate, applicationDeadline, jobApplicantsNumber } = job;

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
            <p className=' text-gray-600'>Posted on: {postingDate}</p>
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
            Application Deadline: <span className='text-green-500 font-bold'>{applicationDeadline}</span>
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
          <p className=' text-gray-600'>Job Applicants: {jobApplicantsNumber}</p>
          <button className='btn btn-info text-white bg-primary border-0 hover:bg-black'>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
