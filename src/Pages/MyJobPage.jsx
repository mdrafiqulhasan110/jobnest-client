import { AiOutlineEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const MyJobPage = () => {
  const jobs = [
    {
      jobBannerURL: "https://example.com/job1-banner.jpg",
      jobTitle: "Software Engineer",
      postedBy: "John Doe",
      postedEmail: "john.doe@example.com",
      jobCategory: "Remote",
      salaryRange: "$80,000 - $100,000",
      jobDescription: "We are looking for a skilled software engineer to join our team...",
      postingDate: "2023-11-01",
      applicationDeadline: "2023-11-15",
      jobApplicantsNumber: 0,
    },
    {
      jobBannerURL: "https://example.com/job2-banner.jpg",
      jobTitle: "Product Manager",
      postedBy: "Alice Smith",
      postedEmail: "alice.smith@example.com",
      jobCategory: "On Site",
      salaryRange: "$90,000 - $120,000",
      jobDescription: "As a Product Manager, you will be responsible for leading the product development...",
      postingDate: "2023-11-02",
      applicationDeadline: "2023-11-16",
      jobApplicantsNumber: 0,
    },
    {
      jobBannerURL: "https://example.com/job3-banner.jpg",
      jobTitle: "Graphic Designer",
      postedBy: "Eva Johnson",
      postedEmail: "eva.johnson@example.com",
      jobCategory: "Hybrid",
      salaryRange: "$60,000 - $80,000",
      jobDescription: "We are seeking a creative and talented Graphic Designer to join our team...",
      postingDate: "2023-11-03",
      applicationDeadline: "2023-11-17",
      jobApplicantsNumber: 0,
    },
    {
      jobBannerURL: "https://example.com/job4-banner.jpg",
      jobTitle: "Marketing Specialist",
      postedBy: "Michael Brown",
      postedEmail: "michael.brown@example.com",
      jobCategory: "Remote",
      salaryRange: "$70,000 - $90,000",
      jobDescription: "Join our marketing team and make a difference in the world of digital marketing...",
      postingDate: "2023-11-04",
      applicationDeadline: "2023-11-18",
      jobApplicantsNumber: 0,
    },
  ];
  return (
    <div>
      <div
        className='hero mb-10 rounded-md '
        style={{ backgroundImage: "url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay rounded-md  bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content py-10'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold '>My Jobs</h1>
            <p className='mb-5'>Manage Your Jobs Here</p>
          </div>
        </div>
      </div>
      {jobs.length > 0 ? (
        <>
          <div>
            <div className='overflow-x-auto'>
              <table className='table min-w-full '>
                <thead className='bg-gray-200 text-black font-bold'>
                  <tr className='border-b border-primary'>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Job Title</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Job Category</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Salary Range</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Posting Date</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Deadline</th>

                    <th className=' py-3 text-left text-xs font-medium uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {jobs.map((job, index) => (
                    <tr
                      key={index}
                      className='border-b border-primary'
                    >
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.jobTitle}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.jobCategory}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.salaryRange}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.postingDate}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{job.applicationDeadline}</td>
                      <td className='pr-4 py-4 whitespace-nowrap flex gap-2'>
                        <button>
                          <AiOutlineEye />
                        </button>
                        <button>
                          <AiOutlineEdit />
                        </button>
                        <button>
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className='p-10 text-center font-bold text-3xl'>No Job Found</p>
      )}
    </div>
  );
};

export default MyJobPage;
