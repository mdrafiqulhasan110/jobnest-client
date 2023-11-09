import JobCard from "./JobCard";

const JobCards = ({ jobs }) => {
  return (
    <div>
      {jobs.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {jobs.map((job) => (
            <JobCard
              job={job}
              key={job._id}
            ></JobCard>
          ))}
        </div>
      ) : (
        <p className='p-10 text-center font-bold text-3xl'>No Job Found</p>
      )}
    </div>
  );
};

export default JobCards;
