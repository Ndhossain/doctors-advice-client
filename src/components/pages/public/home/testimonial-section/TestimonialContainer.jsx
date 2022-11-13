import React from 'react';

function TestimonialContainer({ review }) {
    const { img, text, name, adress } = review;
    return (
        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{text}</p>
            <div className="flex gap-3 items-center">
                <img src={img} alt={name} className="border-4 h-20 border-secondary rounded-full" />
                <div>
                    <h4 className="text-xl text-headingCol font-semibold">{name}</h4>
                    <p>{adress}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialContainer;
