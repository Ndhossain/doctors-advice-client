import React from 'react';
import testimonial from '../../../../../assets/icons/quote.svg';
import client1 from '../../../../../assets/images/people1.png';
import client2 from '../../../../../assets/images/people2.png';
import client3 from '../../../../../assets/images/people3.png';
import TestimonialContainer from './TestimonialContainer';

function TestimonialSection() {
    const review = [
        {
            id: 1,
            name: 'Simbil Hossain',
            adress: 'Chourongi, Dinajpur',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: client1,
        },
        {
            id: 2,
            name: 'Pingky Rani',
            adress: 'Birgonj, Dinajpur',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: client2,
        },
        {
            id: 3,
            name: 'Anika Akter',
            adress: 'Keraniganj, Dhaka',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: client3,
        },
    ];
    return (
        <div
            style={{ backgroundImage: `url(${testimonial})` }}
            className="mt-10 bg-no-repeat bg-[length:150px_75px] lg:bg-[length:300px_150px] bg-right-top"
        >
            <div>
                <h5 className="text-lg font-bold text-secondary">Testimonial</h5>
                <h2 className="mt-5 mb-2 text-4xl font-bold tracking-tight text-headingCol dark:text-white">
                    What Our Patient Says
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">
                {review.map((rev) => (
                    <TestimonialContainer key={rev.id} review={rev} />
                ))}
            </div>
        </div>
    );
}

export default TestimonialSection;
