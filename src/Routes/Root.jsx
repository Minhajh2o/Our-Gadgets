import React from 'react';
import Navbar from './NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='container px-4 mx-auto'>
            <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;