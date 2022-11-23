import { createBrowserRouter } from 'react-router-dom';
import AddDoctors from '../components/pages/admin/add-doctors/AddDoctors';
import AdminRoute from '../components/pages/admin/admin-route/AdminRoute';
import Doctors from '../components/pages/admin/Doctors/Doctors';
import MyAppointments from '../components/pages/admin/my-appointments/MyAppointments';
import UsersPanel from '../components/pages/admin/UsersPanel/UsersPanel';
import PrivateRoute from '../components/pages/private/PrivateRoute';
import Appointment from '../components/pages/public/appointment/Appointment';
import Home from '../components/pages/public/home/Home';
import Login from '../components/pages/public/login/Login';
import Register from '../components/pages/public/register/Register';
import DashboardLayout from '../layout/DashboardLayout';
import Layout from '../layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/appointment',
                element: <Appointment />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments />,
            },
            {
                path: '/dashboard/users',
                element: (
                    <AdminRoute>
                        <UsersPanel />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/add-doctor',
                element: (
                    <AdminRoute>
                        <AddDoctors />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/doctors',
                element: (
                    <AdminRoute>
                        <Doctors />
                    </AdminRoute>
                ),
            },
        ],
    },
]);

export default router;
