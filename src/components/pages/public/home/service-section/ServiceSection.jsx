import React from 'react';
import service2 from '../../../../../assets/images/cavity.png';
import service1 from '../../../../../assets/images/fluoride.png';
import service3 from '../../../../../assets/images/whitening.png';
import HomeServiceContainer from './HomeServiceContainer';

function ServiceSection() {
    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, atque.',
            img: service1,
        },
        {
            id: 2,
            title: 'Cavity Filling',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, atque.',
            img: service2,
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, atque.',
            img: service3,
        },
    ];
    return (
        <div className="mt-10">
            <div>
                <h5 className="text-lg text-center font-bold text-secondary">OUR SERVICES</h5>
                <h2 className="text-4xl text-center font-bold text-headingCol dark:text-white mt-5">
                    Services We Provide
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10">
                {services.map((service) => (
                    <HomeServiceContainer key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default ServiceSection;
