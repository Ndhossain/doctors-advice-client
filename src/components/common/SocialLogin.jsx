import React from 'react';
import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';

function SocialLogin() {
    return (
        <div>
            <h4 className="mb-5 text-secondary font-semibold text-xl text-center">Login with</h4>
            <div className="flex justify-center gap-7 mb-5">
                <BsGithub size={30} color="#3A4256" className="cursor-pointer" />
                <BsGoogle size={30} color="#3A4256" className="cursor-pointer" />
                <BsTwitter size={30} color="#3A4256" className="cursor-pointer" />
            </div>
        </div>
    );
}

export default SocialLogin;
