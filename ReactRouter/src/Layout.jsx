import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Route() {
    return (
        <>
            <Header />
            <Outlet /> {/*this will change the value inside middle(we can say home) and header, footer will be same/fixed  */}
            <Footer />
        </>
    )
}

export default Route;