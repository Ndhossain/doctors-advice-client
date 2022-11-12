import React from 'react';
import info1 from '../../../../../assets/icons/clock.svg';
import info2 from '../../../../../assets/icons/marker.svg';
import info3 from '../../../../../assets/icons/phone.svg';
import Info from './Info';

function InfoSection() {
    const infos = [
        {
            id: 1,
            title: 'Opening Hours',
            text: '8am - 5pm',
            img: info1,
            classes: 'bg-gradient-to-r from-secondary to-primary',
        },
        {
            id: 2,
            title: 'Visit Our Locations',
            text: 'Ayin college mor, Dinajpur, Bangladesh',
            img: info2,
            classes: 'bg-headingCol',
        },
        {
            id: 3,
            title: 'Contact Us Now',
            text: '+88 0170 0000000',
            img: info3,
            classes: 'bg-gradient-to-r from-secondary to-primary',
        },
    ];

    return (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-7">
            {infos.map((info) => (
                <Info key={info.id} info={info} />
            ))}
        </div>
    );
}

export default InfoSection;
