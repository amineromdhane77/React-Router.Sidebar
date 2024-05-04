import React from 'react';
import { IoBookSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
     <section>
     <div className=' bg-black h-20 w-full flex items-center pl-10 space-x-4'>
     <div>
     <IoBookSharp  className=' text-white text-4xl'/>
     </div>
     <div>
     <p className=' text-white text-3xl'>My codding Book</p>
     </div>
     </div>
     </section>
    </div>
  );
}

export default Navbar;
