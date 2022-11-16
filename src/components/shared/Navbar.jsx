import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Navbar() {
    const [resNav, setResNav] = useState(false);
    const { currentUser, loading, logoutUser } = useAuth();
    return (
        <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Doctots-Advice
                    </span>
                </Link>
                <button
                    onClick={() => setResNav(!resNav)}
                    data-collapse-toggle="navbar"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className={`${resNav ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pr-4 pl-3 text-white bg-secondary rounded md:bg-transparent md:text-secondary md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/appointment"
                                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Appointment
                            </Link>
                        </li>
                        {!loading &&
                            (currentUser ? (
                                <li>
                                    <Dropdown
                                        outline
                                        size="32px"
                                        color="#fff"
                                        label={
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={currentUser?.photoURL}
                                                alt={currentUser?.displayName}
                                            />
                                        }
                                    >
                                        <Dropdown.Header>
                                            <span className="block text-sm">
                                                {currentUser?.displayName}
                                            </span>
                                            <span className="block text-sm font-medium truncate">
                                                {currentUser?.email}
                                            </span>
                                        </Dropdown.Header>
                                        <Dropdown.Item>Dashboard</Dropdown.Item>
                                        <Dropdown.Item>Settings</Dropdown.Item>
                                        <Dropdown.Item>Earnings</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={() => logoutUser()}>
                                            Sign out
                                        </Dropdown.Item>
                                    </Dropdown>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
