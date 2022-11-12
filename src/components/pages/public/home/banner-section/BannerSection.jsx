import React from 'react';
import bannerBg from '../../../../../assets/images/bg.png';
import bannerImage from '../../../../../assets/images/chair.png';

function BannerSection() {
    return (
        <div
            role="status"
            className="space-y-8 md:space-y-0 md:space-x-8 flex flex-col-reverse md:flex-row justify-between items-center mt-10 p-3 md:p-8 min-h-[700px] bg-no-repeat"
            style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: '700px 100%' }}
        >
            <div>
                <h2 className="text-4xl font-extrabold text-headingCol dark:text-white">
                    Your New Smile Starts Here
                </h2>
                <p className="mb-3 mt-5 font-light text-base text-gray-500 dark:text-gray-400">
                    We are specialists in diseases related to teeth. Whenever there is pain or any
                    kind of problem with your teeth. Visit us. Make your smile wide.
                </p>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                >
                    Get Started
                </button>
            </div>
            <div>
                <img src={bannerImage} alt="Banner" />
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default BannerSection;
