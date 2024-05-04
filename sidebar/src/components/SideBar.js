import React from 'react';
import { SideBarData } from '../data/SideBarData';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
  const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'
  return (
    <div>
    <section>
    <div className=' text-white'>
    {
        SideBarData.map((item,index)=>{
            return (
<div key={index}>
<NavLink to={item.path} className={({isActive} )=>isActive? activeLink:normalLink}>

<span>{item.icon}</span>
<span> {item.title} </span>
</NavLink>
</div>
            )
        })
    }
    </div>
    </section>
     
    </div>
  );
}

export default SideBar;
