import { Carousel } from "flowbite-react";

const Testimonial = () => {
  return (
    <div className='h-[300px] '>
      <Carousel>
        {/* Testimonial 1 */}
        <div className='bg-[#F0F5F7] border border-primary p-4 rounded-lg h-full flex flex-col justify-center items-center'>
          <img
            src='https://images.unsplash.com/photo-1567822781105-a80d1b601697?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='John Doe'
            className='w-32 h-32 object-cover mb-4 rounded-full'
          />
          <p className='text-gray-800'>"Amazing experience with this service. The team is highly professional and responsive. Will definitely recommend!"</p>
          <p className='text-gray-600 mt-2'>- John Doe</p>
        </div>

        {/* Testimonial 2 */}
        <div className='bg-[#F0F5F7] border border-primary p-4 rounded-lg h-full flex flex-col justify-center items-center'>
          <img
            src='https://images.unsplash.com/photo-1528301621821-3768de068278?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='John Doe'
            className='w-32 h-32 object-cover mb-4 rounded-full'
          />
          <p className='text-gray-800'>"Excellent product! It exceeded my expectations. The quality is top-notch, and the delivery was prompt."</p>
          <p className='text-gray-600 mt-2'>- Jane Smith</p>
        </div>

        {/* Testimonial 3 */}
        <div className='bg-[#F0F5F7] border border-primary p-4 rounded-lg h-full flex flex-col justify-center items-center'>
          <img
            src='https://images.unsplash.com/photo-1610875578760-47c4624ffd3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='John Doe'
            className='w-32 h-32 object-cover mb-4 rounded-full'
          />
          <p className='text-gray-800'>"The support team is fantastic. They were quick to address my queries and provided helpful solutions."</p>
          <p className='text-gray-600 mt-2'>- Alex Johnson</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
