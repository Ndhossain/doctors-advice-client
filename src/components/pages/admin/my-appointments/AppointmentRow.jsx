import React from 'react';

function AppointmentRow({ booking }) {
    const { name, treatment, appointmentDate, slot } = booking;
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
            >
                {name}
            </th>
            <td className="py-4 px-6">{treatment}</td>
            <td className="py-4 px-6">{appointmentDate}</td>
            <td className="py-4 px-6">{slot}</td>
            <td className="py-4 px-6">
                <button
                    type="button"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit
                </button>
            </td>
        </tr>
    );
}

export default AppointmentRow;
