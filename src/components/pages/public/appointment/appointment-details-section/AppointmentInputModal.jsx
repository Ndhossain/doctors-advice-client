/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import { format } from 'date-fns';
import { Button, Modal, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../../../../hooks/useAuth';

function AppointmentInputModal({ modal, setModal, serviceModalData, selectedDate, refetch }) {
    const { currentUser } = useAuth();
    const { name, slots } = serviceModalData;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const AppointmentData = {
            ...data,
            name: data.name || currentUser?.displayName,
            email: data.email || currentUser?.email,
            slot: data.slot || (slots && slots[0]),
            uid: currentUser?.uid,
            treatment: name,
        };
        try {
            const res = await axios({
                method: 'POST',
                data: AppointmentData,
                url: `${process.env.REACT_APP_devUrl}/bookings`,
            });
            if (!res.data.acknowledged) {
                setModal(false);
                reset();
                toast.error(res.data.message);
            } else {
                refetch();
                reset();
                setModal(false);
                toast.success('Successfully booked you appointment.');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Modal show={modal} size="md" popup onClose={() => setModal(false)}>
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h3>
                    <div>
                        <TextInput
                            type="text"
                            readOnly
                            {...register('appointmentDate')}
                            defaultValue={format(selectedDate, 'PP')}
                        />
                    </div>
                    <div>
                        <select
                            id="default"
                            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('slot')}
                            defaultValue={slots && slots[0]}
                        >
                            {slots?.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <TextInput
                            placeholder="Full Name"
                            type="text"
                            readOnly={!!currentUser}
                            required
                            defaultValue={currentUser?.displayName}
                            {...register('name')}
                        />
                    </div>
                    <div>
                        <TextInput
                            placeholder="Email"
                            type="text"
                            {...register('email')}
                            defaultValue={currentUser?.email}
                            readOnly={!!currentUser}
                            required
                        />
                    </div>
                    <div>
                        <TextInput
                            placeholder="Phone No."
                            type="text"
                            required
                            {...register('phoneNo')}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="w-full text-white border border-headingCol bg-headingCol hover:text-headingCol hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default AppointmentInputModal;
