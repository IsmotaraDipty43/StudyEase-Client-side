import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div className='container mx-auto'>
          <Navbar></Navbar>
          <div className='min-h-screen'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Mainlayout;