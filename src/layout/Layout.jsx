import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

function Layout() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto min-h-screen px-5">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
