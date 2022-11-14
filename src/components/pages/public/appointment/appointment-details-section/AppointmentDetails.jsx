import { format } from 'date-fns';
import React from 'react';

function AppointmentDetails({ selectedDate }) {
    return (
        <div className="mt-10">
            <h5 className="text-center text-lg font-bold text-secondary">
                Available Appointments on {format(selectedDate, 'PP')}
            </h5>
        </div>
    );
}

export default AppointmentDetails;
