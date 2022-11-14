import React from 'react';
import { DayPicker } from 'react-day-picker';
import bannerBg from '../../../../../assets/images/bg.png';
import bannerImage from '../../../../../assets/images/chair.png';

function AppointmentBanner({ selectedDate, setSelectedDate }) {
    return (
        <div
            role="status"
            className="space-y-8 md:space-y-0 md:space-x-8 flex flex-col-reverse md:flex-row justify-between items-center mt-10 p-3 md:p-8 min-h-[700px] bg-no-repeat"
            style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: '700px 100%' }}
        >
            <div className="basis-1/2 flex justify-center">
                <DayPicker
                    className="shadow-2xl p-5 rounded-lg bg-white"
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>
            <div className="basis-1/2">
                <img src={bannerImage} alt="Banner" />
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default AppointmentBanner;
