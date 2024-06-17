// import React, { useState } from 'react';

// const Faq = () => {
//   const [openSections, setOpenSections] = useState({});

//   const openAnsSection = (val) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [val]: !prev[val],
//     }));
//   };

//   return (
//     <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-10 px-4 mb-10 bg-black rounded-xl">
//       <h2 className="font-semibold text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 pl-4">Frequently Asked Questions</h2>
//       <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
//         <div>
//           <p className="font-normal text-gray-400 text-base leading-6 lg:w-8/12 md:w-9/12 pl-4">Here are few of the most frequently asked questions by our valueable customers</p>
//         </div>

        
//       </div>
//       <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
//         <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
//           <div>
//             <div className="flex justify-between items-center cursor-pointer" onClick={() => openAnsSection(1)}>
//               <h3 className="font-semibold text-xl text-white leading-5 p-5">Alright, but what exactly do you do?</h3>
//               <button aria-label="too" className="text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path className="" d="M10 4.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//             <p id="para1" className={`${openSections[1] ? 'block' : 'hidden'} font-normal text-gray-400 text-base leading-6 mt-4 w-11/12 pl-4 pb-4`}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
//             </p>
//           </div>

//           <hr className="my-7 bg-gray-700" />

//           <div>
//             <div className="flex justify-between items-center cursor-pointer" onClick={() => openAnsSection(2)}>
//               <h3 className="font-semibold text-xl text-white leading-5 p-5">Why should we choose ?</h3>
//               <button aria-label="too" className="text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path className="" d="M10 4.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//             <p id="para2" className={`${openSections[2] ? 'block' : 'hidden'} font-normal text-gray-400 text-base leading-6 mt-4 w-11/12 pl-4 pb-4`}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
//             </p>
//           </div>

//           <hr className="my-7 bg-gray-700" />

//           <div>
//             <div className="flex justify-between items-center cursor-pointer" onClick={() => openAnsSection(3)}>
//               <h3 className="font-semibold text-xl text-white leading-5 p-5">Are your rates competitive?</h3>
//               <button aria-label="too" className="text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path className="" d="M10 4.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//             <p id="para3" className={`${openSections[3] ? 'block' : 'hidden'} font-normal text-gray-400 text-base leading-6 mt-4 w-11/12 pl-4 pb-4`}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
//             </p>
//           </div>

//           <hr className="my-7 bg-gray-700" />

//           <div>
//             <div className="flex justify-between items-center cursor-pointer" onClick={() => openAnsSection(4)}>
//               <h3 className="font-semibold text-xl text-white leading-5 p-5">What are the payment methods you offer ?</h3>
//               <button aria-label="too" className="text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path className="" d="M10 4.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//             <p id="para4" className={`${openSections[4] ? 'block' : 'hidden'} font-normal text-gray-400 text-base leading-6 mt-4 w-11/12 pl-4 pb-4`}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;
