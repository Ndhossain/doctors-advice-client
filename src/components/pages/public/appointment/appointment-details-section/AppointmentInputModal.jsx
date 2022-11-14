/* eslint-disable react/no-array-index-key */
import { format } from 'date-fns';
import { Button, Modal, TextInput } from 'flowbite-react';
import React from 'react';

function AppointmentInputModal({ modal, setModal, serviceModalData, selectedDate }) {
    const { name, slots } = serviceModalData;

    return (
        <Modal show={modal} size="md" popup onClose={() => setModal(false)}>
            <Modal.Header />
            <Modal.Body>
                <form className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h3>
                    <div>
                        <TextInput type="text" value={format(selectedDate, 'PP')} readOnly />
                    </div>
                    <div>
                        <select
                            id="default"
                            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {slots && (
                                <option selected value={slots[0]}>
                                    {slots[0]}
                                </option>
                            )}
                            {slots?.map(
                                (slot, index) =>
                                    index > 0 && (
                                        <option key={index} value={slot}>
                                            {slot}
                                        </option>
                                    )
                            )}
                        </select>
                    </div>
                    <div>
                        <TextInput placeholder="Full Name" type="text" required />
                    </div>
                    <div>
                        <TextInput placeholder="Email" type="text" required />
                    </div>
                    <div>
                        <TextInput placeholder="Phone No." type="text" required />
                    </div>
                    <div>
                        <Button className="w-full text-white border border-headingCol bg-headingCol hover:text-headingCol hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default AppointmentInputModal;
