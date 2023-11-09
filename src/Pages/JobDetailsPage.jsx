import { Helmet } from "react-helmet-async";
import JobDetailsCard from "../Components/Jobs/JobDetailsCard";
import { useLoaderData } from "react-router-dom";

const JobDetailsPage = () => {
  const job = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>JobNest | Job Details</title>
      </Helmet>
      {job ? (
        <JobDetailsCard job={job}></JobDetailsCard>
      ) : (
        <>
          <p className='p-10 text-center font-bold text-3xl'>Job Not Found</p>
          <p className='text-center'>(Job Deleted Or Application Perod is Over)</p>
        </>
      )}
    </div>
  );
};

export default JobDetailsPage;
