import img1 from '../assets/landing-img1.png';

const Front = () => {
  return (
    <div className='mx-5 mt-10 flex min-h-[70vh] flex-col items-center space-x-3 space-y-2 md:mx-32 md:flex-row md:justify-between'>
        <div className='test-center md:w-2/4'>
          <div className='text-container'>
            <h2 className='transform overflow-hidden break-normal break-words font-mono text-5xl font-bold italic leading-tight transition duration-500 hover:scale-110 hover:text-gray-500'>
              Development, Simplified !
            </h2>
          </div>
          <p className='mt-5 transform text-start font-mono text-3xl transition duration-500 hover:scale-110 hover:text-gray-500'>
            Powering the future of web development with EvolveDev !
          </p>
        </div>
        <div className='w-full md:w-2/4'>
          <img src={img1} alt='home-img' />
        </div>
      </div>
  );
};

export default Front;
