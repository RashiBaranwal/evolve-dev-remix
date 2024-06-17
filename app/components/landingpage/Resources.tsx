import r1 from '../assets/res-1.png';
import r2 from '../assets/res-2.png';
import r3 from '../assets/res-3.png';

const Resources = () => {
  return (
    <div className='bg-neutral-950 w-full p-10'>
      <h1 className='mb-2 mt-10 text-center text-2xl font-bold capitalize text-white'>Resources</h1>
      <hr className='mx-auto w-1/5 ' />
      {/*------------------ Cards -------------*/}
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:gap-3 mt-20 bg-neutral-950 mb-10'>
        {/* 1st card */}
        <div className='py-10'>
          <div className='h-100 max-w-sm overflow-hidden rounded shadow-lg bg-gray-200 p-4 dark:bg-neutral-950'>
            <img src={r1} alt='r1' className='w-full max-w-20' />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold'>Free Download</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className='py-10'>
          <div className='h-100 max-w-sm overflow-hidden rounded shadow-lg bg-gray-200 p-4 dark:bg-neutral-950'>
            <img src={r2} alt='r1' className='w-full max-w-20' />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold'>Whitepapers</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className='py-10'>
          <div className='h-100 max-w-sm overflow-hidden rounded shadow-lg bg-gray-200 p-4 dark:bg-neutral-950'>
            <img src={r3} alt='r1' className='w-full max-w-20' />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold'>E-books</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
