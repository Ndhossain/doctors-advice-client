import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentInputModal from './AppointmentInputModal';
import AppointmentItemContainer from './AppointmentItemContainer';

function AppointmentDetails({ selectedDate }) {
    const [serviceData, setServiceData] = useState();
    const [modal, setModal] = useState(false);
    const [serviceModalData, setServcieModalData] = useState({});

    useEffect(() => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_devUrl}/appointments`,
        })
            .then((res) => {
                setServiceData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="mt-10">
            <h5 className="text-center text-lg font-bold text-secondary">
                Available Appointments on {format(selectedDate, 'PP')}
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {serviceData?.map((data) => (
                    <AppointmentItemContainer
                        key={data._id}
                        serviceData={data}
                        setModal={setModal}
                        setServcieModalData={setServcieModalData}
                    />
                ))}
            </div>
            {serviceModalData && (
                <AppointmentInputModal
                    setModal={setModal}
                    modal={modal}
                    serviceModalData={serviceModalData}
                    selectedDate={selectedDate}
                />
            )}
        </div>
    );
}

export default AppointmentDetails;
