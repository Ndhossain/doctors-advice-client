import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useToken from '../../hooks/useToken';

function SocialLogin({ setError }) {
    const [loginUid, setLoginUid] = useState('');
    const navigate = useNavigate();
    const { providerLogin } = useAuth();
    const googleProvider = new GoogleAuthProvider();
    useToken(loginUid);

    const googleLogin = async () => {
        try {
            setError(null);
            const res = await providerLogin(googleProvider);
            setLoginUid(res.user.uid);
            navigate('/');
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <div>
            <h4 className="mb-5 text-secondary font-semibold text-xl text-center">Login with</h4>
            <div className="flex justify-center gap-7 mb-5">
                <BsGithub size={30} color="#3A4256" className="cursor-pointer" />
                <BsGoogle
                    onClick={googleLogin}
                    size={30}
                    color="#3A4256"
                    className="cursor-pointer"
                />
                <BsTwitter size={30} color="#3A4256" className="cursor-pointer" />
            </div>
        </div>
    );
}

export default SocialLogin;
