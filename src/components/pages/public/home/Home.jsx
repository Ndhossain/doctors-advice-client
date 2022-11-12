import React from 'react';
import BannerSection from './banner-section/BannerSection';
import InfoSection from './info-section/InfoSection';
import ServiceSection from './service-section/ServiceSection';

function Home() {
    return (
        <div>
            <BannerSection />
            <InfoSection />
            <ServiceSection />
        </div>
    );
}

export default Home;
