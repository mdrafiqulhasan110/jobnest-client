import { Helmet } from "react-helmet-async";
import JobDetailsCard from "../Components/Jobs/JobDetailsCard";

const JobDetailsPage = () => {
  const job = {
    jobBannerURL: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jobTitle: "Software Engineer",
    postedBy: "John Doe",
    postedEmail: "john.doe@example.com",
    jobCategory: "Remote",
    salaryRange: "$80,000 - $100,000",
    jobDescription: "We are looking for a skilled software engineer to join our team...",
    postingDate: "2023-11-01",
    applicationDeadline: "2023-11-15",
    jobApplicantsNumber: 0,
  };

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
