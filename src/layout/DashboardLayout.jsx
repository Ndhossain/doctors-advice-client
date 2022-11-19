import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

function DashboardLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default DashboardLayout;
