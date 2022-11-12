import React from 'react';
import AppointmentSection from './appointment-section/AppointmentSection';
import BannerSection from './banner-section/BannerSection';
import InfoSection from './info-section/InfoSection';
import ServiceSection from './service-section/ServiceSection';
import SomethingUsSection from './something-us-section/SomethingUsSection';

function Home() {
    return (
        <div>
            <BannerSection />
            <InfoSection />
            <ServiceSection />
            <SomethingUsSection />
            <AppointmentSection />
        </div>
    );
}

export default Home;
