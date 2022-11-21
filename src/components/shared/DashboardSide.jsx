import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useIsAdmin from '../../hooks/useIsAdmin';

function DashboardSide() {
    const { currentUser } = useAuth();
    const { isAdmin } = useIsAdmin(currentUser.uid);
    return (
        <aside className="" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 sticky top-0 h-screen">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/dashboard"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <span className="ml-3">Appointments</span>
                        </Link>
                    </li>
                    {isAdmin && (
                        <>
                            <li>
                                <Link
                                    to="/dashboard/users"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/add-doctor"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Add Doctor
                                    </span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </aside>
    );
}

export default DashboardSide;
