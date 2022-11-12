import React from 'react';
import { Link } from 'react-router-dom';

function Info({ info }) {
    const { title, text, img, classes } = info;
    return (
        <Link
            to="/"
            className={`flex flex-col items-center rounded-lg border shadow-md md:flex-row p-5 text-white ${classes}`}
        >
            <img
                className="rounded-t-lg md:w-24 md:rounded-none md:rounded-l-lg"
                src={img}
                alt="Info"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center md:text-left">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-center md:text-left">{text}</p>
            </div>
        </Link>
    );
}

export default Info;
