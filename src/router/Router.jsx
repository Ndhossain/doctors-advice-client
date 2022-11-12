import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/public/home/Home';
import Login from '../components/pages/public/login/Login';
import Register from '../components/pages/public/register/Register';
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
        ],
    },
]);

export default router;