import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shaerd/Footer/Footer';
import Header from '../Pages/Shaerd/Header/Header';
import LesftSideNav from '../Pages/Shaerd/LeftSideNav/LesftSideNav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>

                <div><Outlet></Outlet></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;