import React from 'react'
import BlogNav from '../Component/BlogNav';
import Home from './Home';
import Posts from './Posts';
import Post1 from './Post1';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
   <>
   <BlogNav/>
   <Outlet/>
   
   
   </>
  )
}

export default Layout;
