import React from 'react';
import Home from '../Shared/Home/Home';
import Support from '../Support/Support';
import RecommandedItems from '../Recommanded_Items/RecommandedItems';
import Header from '../Shared/Headers/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-white'>
            {/* <Home></Home>
            <Support></Support>
            <RecommandedItems></RecommandedItems> */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;