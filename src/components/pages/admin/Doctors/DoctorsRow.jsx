import React from 'react';

function DoctorsRow({ doctor, i }) {
    const { name, email, img, specialist } = doctor;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
                <div className="flex items-center">{i + 1}</div>
            </td>
            <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
            >
                <img className="w-10 h-10 rounded-full" src={img} alt={name} />
                <div className="pl-3">
                    <div className="text-base font-semibold">{name}</div>
                </div>
            </th>
            <td className="py-4 px-6">{email}</td>
            <td className="py-4 px-6">{specialist}</td>
            <td className="py-4 px-6">
                <button
                    type="button"
                    className="text-white bg-secondary font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default DoctorsRow;
