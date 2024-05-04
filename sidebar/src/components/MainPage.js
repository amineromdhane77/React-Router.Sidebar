import React from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';
import NavPage from './NavPage';

const MainPage = () => {
  return (
    <div>
    <section>
    <div>
    <Navbar/>
    </div>
    </section>
   <section>
   <div className=' grid grid-cols-12'>
   <div className=' col-span-3 bg-black h-screen pl-2 md:col-span-2'>
<SideBar/>
   </div>
   <div className=' col-span-9 bg-slate-600 h-screen pl-2 md:col-span-10'>
   <NavPage />
   </div>
   </div>
   
   </section>
    </div>
  );
}

export default MainPage;
