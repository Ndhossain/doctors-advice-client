import React from 'react';

function AppointmentItemContainer({ serviceData, setModal, setServcieModalData }) {
    const { name, slots } = serviceData;

    return (
        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Starts at 8:00am - Ends at 5:00pm
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Available Seats: {slots.length < 1 ? 'No seats available' : slots.length}
            </p>
            <div>
                <button
                    type="button"
                    className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                        slots.length < 1
                            ? ' border bg-gray-400 text-white'
                            : 'bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-bl'
                    }`}
                    data-modal-toggle="authentication-modal"
                    onClick={() => {
                        setModal(true);
                        setServcieModalData(serviceData);
                    }}
                    disabled={slots.length < 1}
                >
                    {slots.length < 1 ? 'Seat Not Available' : 'Book Appointment'}
                </button>
            </div>
        </div>
    );
}

export default AppointmentItemContainer;
