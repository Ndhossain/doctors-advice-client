import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Spinner } from 'flowbite-react';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import AppointmentRow from './AppointmentRow';

function MyAppointments() {
    const { currentUser } = useAuth();
    const { data: bookingData, isLoading } = useQuery({
        queryKey: ['bookings', currentUser?.uid],
        queryFn: () =>
            axios({
                method: 'GET',
                url: `${process.env.REACT_APP_devUrl}/bookings?uid=${currentUser?.uid}`,
            }),
    });

    console.log(isLoading, bookingData);

    return (
        <div className="overflow-x-auto relative w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            User name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Treatment
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Time
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <Spinner color="secondary" aria-label="Info spinner example" />
                    ) : (
                        bookingData?.data?.map((booking) => (
                            <AppointmentRow key={booking._id} booking={booking} />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default MyAppointments;
