import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";

const AddJobForm = () => {
  const { user } = useContext(AuthContext);

  const [jobData, setJobData] = useState({
    bannerUrl: "",
    title: "",
    username: `${user.displayName}`,
    category: "On Site",
    salaryRange: "",
    description: "",
    postingDate: new Date(),
    applicationDeadline: new Date(),
    applicantsNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleDeadlineDateChange = (date) => {
    setJobData({ ...jobData, applicationDeadline: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobData);
  };

  return (
    <div className='mx-auto px-3 py-6 rounded-md bg-gray-200'>
      <form onSubmit={handleSubmit}>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='mb-4'>
            <label htmlFor='title'>Job Title</label>
            <input
              type='text'
              id='title'
              name='title'
              value={jobData.title}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='bannerUrl'>Picture URL of the Job Banner</label>
            <input
              type='text'
              id='bannerUrl'
              name='bannerUrl'
              value={jobData.bannerUrl}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='category'>Job Category</label>
            <select
              id='category'
              name='category'
              value={jobData.category}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
            >
              <option value='On Site'>On Site</option>
              <option value='Remote'>Remote</option>
              <option value='Part-Time'>Part-Time</option>
              <option value='Hybrid'>Hybrid</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='bannerUrl'>User Name</label>
            <input
              type='text'
              id='username'
              name='username'
              value={jobData.username}
              onChange={handleChange}
              disabled
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
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>

          <div className='mb-4'>
            <label>Posting Date</label>
            <DatePicker
              selected={jobData.postingDate}
              className='w-full px-3 py-2 border rounded-lg bg-gray-400'
              disabled
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='applicationDeadline'>Application Deadline</label>
            <DatePicker
              selected={jobData.applicationDeadline}
              onChange={handleDeadlineDateChange}
              name='applicationDeadline'
              className=' w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='mb-4'>
            <label>Job Applicants Number</label>
            <input
              type='text'
              value={jobData.applicantsNumber}
              className='w-full px-3 py-2 border rounded-lg bg-gray-400'
              disabled
            />
          </div>
          <div className='mb-4 col-span-1 lg:col-span-2'>
            <label htmlFor='description'>Job Description</label>
            <textarea
              id='description'
              name='description'
              value={jobData.description}
              onChange={handleChange}
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
