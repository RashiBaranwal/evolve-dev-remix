const AboutUs = () => {
  return (
    <>
      <div className='mt-10 flex flex-col items-center space-y-5 pt-10'>
        <h2 className='mb-4 text-2xl font-bold'>About Us</h2>
        <div className='flex w-full flex-col items-center space-y-3 md:w-auto md:flex-row md:items-start'>

          <div className='flex mt-5 h-40 w-full justify-center md:w-1/3 md:pr-20'>
            <div className='space-y-10'>
              <div className='wind-line1'></div>
              <div className='wind-line1'></div>
              <div className='wind-line1'></div>
            </div>
          </div>

          <div className='mx-4 my-4 max-w-lg text-center md:my-0 md:text-left'>
            <p className='text-sm font-light md:text-base pb-10'>
              Focus On Your Vision And Leave The Development Complexities To Us. EvolveDev's
              Streamlined Approach Ensures Efficient Project Execution, Clear Communication, And
              Timely Delivery.
            </p>
          </div>

          <div className='flex mt-5 h-40 w-full justify-center md:w-1/3 md:pl-20'>
            <div className='space-y-10 mt-5'>
              <div className='wind-line'></div>
              <div className='wind-line'></div>
              <div className='wind-line'></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default AboutUs;
