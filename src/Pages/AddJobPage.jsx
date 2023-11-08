import AddJobForm from "../Components/Forms/AddJobForm";

const AddJobPage = () => {
  return (
    <div>
      <div
        className='hero mb-10 rounded-md '
        style={{ backgroundImage: "url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay rounded-md  bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content py-10'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold '>Add Job</h1>
            <p className='mb-5'>Post Your Job and Find the Best One for your Company</p>
          </div>
        </div>
      </div>
      <AddJobForm></AddJobForm>
    </div>
  );
};

export default AddJobPage;
