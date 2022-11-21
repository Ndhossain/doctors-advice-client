import axios from 'axios';
import { useEffect, useState } from 'react';

const useIsAdmin = (uid) => {
    const [isAdmin, setIsAdmin] = useState();
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        axios({
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            url: `${process.env.REACT_APP_devUrl}/users/admin/${uid}`,
        }).then((res) => {
            setIsAdmin(res.data.isAdmin);
            setIsAdminLoading(false);
        });
    }, [uid]);
    return { isAdmin, isAdminLoading };
};

export default useIsAdmin;
