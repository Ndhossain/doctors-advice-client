import React from 'react';

function UserRow({ user, handleAdmin }) {
    const { name, email, role, uid } = user;
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
            >
                {name}
            </th>
            <td className="py-4 px-6">{email}</td>
            <td className="py-4 px-6">
                {role || (
                    <button
                        onClick={() => handleAdmin(uid)}
                        type="button"
                        className="text-white bg-primary font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2"
                    >
                        Make Admin
                    </button>
                )}
            </td>
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

export default UserRow;
