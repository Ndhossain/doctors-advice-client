import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (uid) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (uid) {
            axios({
                method: 'GET',
                url: `${process.env.REACT_APP_devUrl}/jwt?uid=${uid}`,
            }).then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem('accessToken', res.data.accessToken);
                    setToken(res.data.accessToken);
                }
            });
        }
    }, [uid]);
    return { token };
};

export default useToken;
