import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Php from '../pages/Php'
import Reactt from '../pages/Reactt'
import Angular from '../pages/Angular'
import Css from '../pages/Css'
import Figma from '../pages/Figma'
import Node from '../pages/Node'
import Java from '../pages/Java'
import Git from '../pages/Git'
const NavPage = () => {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/angular' element={<Angular/>}/>
     <Route path='/css' element={<Css/>}/>
     <Route path='/figma' element={<Figma/>}/>
     <Route path='/git' element={<Git/>}/>
     <Route path='/java' element={<Java/>}/>
     <Route path='/node' element={<Node/>}/>
     <Route path='/php' element={<Php/>}/>
     <Route path='/reactt' element={<Reactt/>}/>
     </Routes>
    </div>
  );
}

export default NavPage;
