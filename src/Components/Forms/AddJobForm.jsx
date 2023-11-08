import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const AddJobForm = () => {
  const { user } = useContext(AuthContext);

  const initialJobData = {
    jobBannerUrl: "",
    jobTitle: "",
    companyLogo: `${user.photoURL}`,
    postedBy: `${user.displayName}`,
    postedEmail: `${user.email}`,
    jobCategory: "On Site",
    salaryRange: "",
    jobDescription: "",
    postingDate: new Date(),
    applicationDeadline: new Date(),
    jobApplicantsNumber: 0,
  };

  const [jobData, setJobData] = useState(initialJobData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleDeadlineDateChange = (date) => {
    setJobData({ ...jobData, applicationDeadline: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/addjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setJobData(initialJobData);
          toast.success("Job Added Successfully");
        }
      });
  };

  return (
    <div className='mx-auto px-3 py-6 rounded-md bg-gray-200'>
      <form onSubmit={handleSubmit}>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='mb-4'>
            <label htmlFor='jobTitle'>Job Title</label>
            <input
              type='text'
              id='jobTitle'
              name='jobTitle'
              value={jobData.jobTitle}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='jobBannerURL'>Picture URL of the Job Banner</label>
            <input
              type='text'
              id='jobBannerURL'
              name='jobBannerURL'
              value={jobData.jobBannerURL}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='jobCategory'>Job jobCategory</label>
            <select
              id='jobCategory'
              name='jobCategory'
              value={jobData.jobCategory}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border rounded-lg'
            >
              <option value='On Site'>On Site</option>
              <option value='Remote'>Remote</option>
              <option value='Part-Time'>Part-Time</option>
              <option value='Hybrid'>Hybrid</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='postedBy'>User Name</label>
            <input
              type='text'
              id='postedBy'
              name='postedBy'
              value={jobData.postedBy}
              onChange={handleChange}
              disabled
              required
              className='w-full px-3 py-2 border rounded-lg bg-gray-400'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='salaryRange'>Salary Range</label>
            <input
              type='text'
              id='salaryRange'
              name='salaryRange'
              value={jobData.salaryRange}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>

          <div className='mb-4'>
            <label>Posting Date</label>
            <DatePicker
              selected={jobData.postingDate}
              className='w-full px-3 py-2 border rounded-lg bg-gray-400'
              disabled
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='applicationDeadline'>Application Deadline</label>
            <DatePicker
              selected={jobData.applicationDeadline}
              onChange={handleDeadlineDateChange}
              name='applicationDeadline'
              required
              className=' w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='mb-4'>
            <label>Job Applicants Number</label>
            <input
              type='text'
              value={jobData.jobApplicantsNumber}
              className='w-full px-3 py-2 border rounded-lg bg-gray-400'
              disabled
              required
            />
          </div>
          <div className='mb-4 col-span-1 lg:col-span-2'>
            <label htmlFor='jobDescription'>Job Description</label>
            <textarea
              id='jobDescription'
              name='jobDescription'
              value={jobData.jobDescription}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
        </div>
        <button
          type='submit'
          className='mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-black'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
