import React, { useState } from 'react';
import AppointmentBanner from './appointment-banner-Section/AppointmentBanner';
import AppointmentDetails from './appointment-details-section/AppointmentDetails';

function Appointment() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AppointmentDetails selectedDate={selectedDate} />
        </div>
    );
}

export default Appointment;
