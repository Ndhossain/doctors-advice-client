import React from 'react';
import AppointmentSection from './appointment-section/AppointmentSection';
import BannerSection from './banner-section/BannerSection';
import ContactSection from './contacts-section/ContactSection';
import InfoSection from './info-section/InfoSection';
import ServiceSection from './service-section/ServiceSection';
import SomethingUsSection from './something-us-section/SomethingUsSection';
import TestimonialSection from './testimonial-section/TestimonialSection';

function Home() {
    return (
        <div>
            <BannerSection />
            <InfoSection />
            <ServiceSection />
            <SomethingUsSection />
            <AppointmentSection />
            <TestimonialSection />
            <ContactSection />
        </div>
    );
}

export default Home;
