import React from 'react';
import backgroundImage from '../../../../../assets/images/appointment.png';
import doctor from '../../../../../assets/images/doctor-small.png';

function AppointmentSection() {
    return (
        <div
            role="status"
            className="space-y-8 lg:space-y-0 lg:space-x-8 flex flex-col lg:flex-row justify-between items-center mt-10 bg-no-repeat bg-bottom bg-cover lg:bg-[length:100%_90%] rounded-lg lg:rounded-none"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="lg:basis-1/2 hidden lg:flex justify-center ">
                <img className="rounded-lg" src={doctor} alt="Treatment" />
            </div>
            <div className="lg:basis-1/2 p-4">
                <h5 className="text-lg font-bold text-secondary text-center lg:text-left">
                    Appointment
                </h5>
                <h2 className="text-4xl font-extrabold text-white mt-5">
                    Make an appointment Today
                </h2>
                <p className="mb-3 mt-5 font-light text-base text-gray-100">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsumis
                    that it has a more-or-less normal distribution of letters,as opposed to using
                    Content here, content here, making it look like readable English. Many desktop
                    publishing packages and web page
                </p>
                <div className="flex lg:block justify-center">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default AppointmentSection;
