import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;