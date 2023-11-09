import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div
      className='hero h-[40vh] my-10 rounded-md'
      style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/megaphone-loudspeaker-speaker-bullhorn-alert-vector-illustration-flat-style_435184-681.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais)" }}
    >
      <div className='hero-overlay bg-black bg-opacity-20 rounded-md'></div>
      <div className='hero-content w-full flex-col items-start text-left text-black'>
        <div className='p-2 '>
          <h1 className='mb-5 text-5xl font-bold text-primary'>Recruiting?</h1>
          <p className='mb-5 pr-6'>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
          <Link to={"./addjob"}>
            <button className='btn bg-primary hover:bg-black text-white border-0'>Start Recruiting Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
