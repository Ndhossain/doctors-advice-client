import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentInputModal from './AppointmentInputModal';
import AppointmentItemContainer from './AppointmentItemContainer';

function AppointmentDetails({ selectedDate }) {
    const [modal, setModal] = useState(false);
    const [serviceModalData, setServcieModalData] = useState({});
    const date = format(selectedDate, 'PP');
    const {
        data: serviceData,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['appointment-options', date],
        queryFn: () =>
            axios({
                method: 'GET',
                url: `${process.env.REACT_APP_devUrl}/appointment-options?date=${date}`,
            }),
    });

    return (
        <div className="mt-10">
            <h5 className="text-center text-lg font-bold text-secondary">
                Available Appointments on {format(selectedDate, 'PP')}
            </h5>
            {!isLoading && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                        {serviceData?.data?.map((data) => (
                            <AppointmentItemContainer
                                key={data._id}
                                serviceData={data}
                                setModal={setModal}
                                setServcieModalData={setServcieModalData}
                            />
                        ))}
                    </div>
                    <AppointmentInputModal
                        setModal={setModal}
                        modal={modal}
                        serviceModalData={serviceModalData}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    />
                </>
            )}
        </div>
    );
}

export default AppointmentDetails;
