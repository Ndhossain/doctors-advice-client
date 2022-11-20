import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSide from '../components/shared/DashboardSide';
import Navbar from '../components/shared/Navbar';

function DashboardLayout() {
    return (
        <>
            <Navbar />
            <div className="md:flex">
                <DashboardSide />
                <Outlet />
            </div>
        </>
    );
}

export default DashboardLayout;
