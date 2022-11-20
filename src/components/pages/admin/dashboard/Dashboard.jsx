import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSide from '../../../shared/DashboardSide';

function Dashboard() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Dashboard;
