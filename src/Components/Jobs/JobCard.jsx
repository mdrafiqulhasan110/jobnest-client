import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const { _id, jobTitle, postedBy, companyLogo, jobCategory, salaryRange, applicationDeadline, jobApplicantsNumber } = job;
  return (
    <div className='p-3 bg-base-200 shadow-lg my-2 rounded-md'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <div>
            <div className='avatar'>
              <div className='w-16 rounded'>
                <img
                  src={companyLogo}
                  alt='Tailwind-CSS-Avatar-component'
                />
              </div>
            </div>
            <p className='text-xs bg-gray-300 text-center p-1 rounded-md text-black'>{postedBy}</p>
          </div>
          <div className='space-y-2'>
            <h2 className='text-2xl font-semibold'>{jobTitle}</h2>
            <p className='text-xs bg-primary inline-block p-1 rounded-md text-white'>{jobCategory}</p>

            <p>{salaryRange}</p>
            <p>Deadline: {`${new Date(applicationDeadline).toLocaleDateString()}`}</p>
          </div>
        </div>
        <div className='pr-4 flex flex-col items-center gap-2'>
          <div className='text-center p-4 rounded-full border-4 border-primary'>
            <p className='text-2xl'>{jobApplicantsNumber}</p>
            <p className='text-sm'>Applied</p>
          </div>
          <Link to={`/jobs/${_id}`}>
            <button className='p-1 bg-primary rounded-md text-sm text-white'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
