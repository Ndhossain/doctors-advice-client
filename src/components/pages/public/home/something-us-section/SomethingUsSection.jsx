import React from 'react';
import treatment from '../../../../../assets/images/treatment.png';

function SomethingUsSection() {
    return (
        <div
            role="status"
            className="space-y-8 md:space-y-0 md:space-x-8 flex flex-col md:flex-row justify-between items-center mt-10 p-3 md:p-8 min-h-[700px] bg-no-repeat"
        >
            <div className="md:basis-1/2 flex justify-center">
                <img className="rounded-lg md:w-[70%]" src={treatment} alt="Treatment" />
            </div>
            <div className="md:basis-1/2">
                <h2 className="text-4xl font-extrabold text-headingCol dark:text-white">
                    Exceptional Dental Care, on Your Terms
                </h2>
                <p className="mb-3 mt-5 font-light text-base text-gray-500 dark:text-gray-400">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsumis
                    that it has a more-or-less normal distribution of letters,as opposed to using
                    Content here, content here, making it look like readable English. Many desktop
                    publishing packages and web page
                </p>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                >
                    Get Started
                </button>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default SomethingUsSection;
