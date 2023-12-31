import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Testimonial from "../Components/Utility/Testimonial";
import Advertisement from "../Components/Utility/advertisement";
import JobCards from "../Components/Jobs/JobCards";

const HomePage = () => {
  const Alljobs = useLoaderData();
  const remote = Alljobs.filter((job) => job.jobCategory == "Remote");
  const onsite = Alljobs.filter((job) => job.jobCategory == "On Site");
  const hybrid = Alljobs.filter((job) => job.jobCategory == "Hybrid");
  const partTime = Alljobs.filter((job) => job.jobCategory == "Part-Time");

  return (
    <div>
      <Helmet>
        <title>JobNest | Home</title>
      </Helmet>
      <div
        className='hero min-h-[50vh] rounded-md'
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay bg-opacity-60 rounded-md'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-lg'>
            <h1 className='mb-5 text-5xl font-bold '>Your Perfect Job, Your Perfect Nest</h1>
            <p className='mb-5'>JobNest is the ideal platform to discover the job that suits you best. Find your perfect career match and nestle into a fulfilling future with us.</p>
            <div className='join border border-primary'>
              <input
                className='input input-bordered join-item text-black'
                placeholder='Search By Job Title'
              />
              <button className='btn join-item bg-primary hover:bg-black text-white'>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10'>
        <h1 className='bg-primary text-center p-2 text-white text-2xl font-medium rounded-md mb-4'>Browse Jobs</h1>
        <Tabs>
          <TabList>
            <Tab>All Jobs</Tab>
            <Tab>On Site</Tab>
            <Tab>Remote</Tab>
            <Tab>Part-time</Tab>
            <Tab>Hybrid</Tab>
          </TabList>

          <TabPanel>
            <JobCards jobs={Alljobs}></JobCards>
          </TabPanel>
          <TabPanel>
            <JobCards jobs={onsite}></JobCards>
          </TabPanel>
          <TabPanel>
            <JobCards jobs={remote}></JobCards>
          </TabPanel>
          <TabPanel>
            <JobCards jobs={partTime}></JobCards>
          </TabPanel>
          <TabPanel>
            <JobCards jobs={hybrid}></JobCards>
          </TabPanel>
        </Tabs>
      </div>
      <Testimonial></Testimonial>
      <Advertisement></Advertisement>
    </div>
  );
};

export default HomePage;
