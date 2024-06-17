import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return (
     <div>
      <h1 className='mb-2 mt-10 text-center text-2xl font-bold capitalize '>FAQ ?</h1>
      <hr className='mx-auto w-1/5 pb-4' />
       <div className="p-4 bg-neutral-950 rounded-lg">
          
          <Accordion
            title="Do you prefer Android or iOS"
            answer="I like to use iOS products"
          />
          <Accordion
            title="Do you prefer writing CSS or Tailwind?"
            answer="I like to use Tailwind"
          />
          <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
        </div>
     </div>
    );
    }

export default FAQ;