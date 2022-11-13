import React from 'react';
import background from '../../../../../assets/images/appointment.png';

function ContactSection() {
    return (
        <div
            className="flex flex-col justify-center py-16 text-white mt-10 bg-[length:100%_100%]"
            style={{ background: `url(${background})` }}
        >
            <div>
                <h5 className="text-center text-lg font-bold text-secondary">Contact Us</h5>
                <h2 className="text-center mt-3 mb-2 text-4xl font-bold tracking-tight">
                    Stay connected with us
                </h2>
            </div>
            <form className="w-full md:w-[60%] lg:w-[40%] mx-auto flex flex-col gap-3 mt-10 px-3">
                <div>
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full p-2 rounded-lg outline-none border-none"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter email"
                        className="w-full p-2 rounded-lg outline-none border-none"
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        placeholder="Enter message"
                        className="w-full p-2 resize-none rounded-lg h-28 outline-none border-none"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactSection;
