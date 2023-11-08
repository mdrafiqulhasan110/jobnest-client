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
      <JobDetailsCard job={job}></JobDetailsCard>
    </div>
  );
};

export default JobDetailsPage;
