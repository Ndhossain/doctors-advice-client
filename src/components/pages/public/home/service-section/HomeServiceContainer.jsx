import React from 'react';
import { Link } from 'react-router-dom';

function HomeServiceContainer({ service }) {
    const { title, text, img } = service;

    return (
        <Link
            to="/"
            className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 flex flex-col items-center justify-between gap-5"
        >
            <img className="w-32 rounded-t-lg" src={img} alt={title} />
            <div>
                <div>
                    <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </div>
                <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {text}
                </p>
            </div>
        </Link>
    );
}

export default HomeServiceContainer;
