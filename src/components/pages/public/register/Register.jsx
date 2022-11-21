import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useToken from '../../../../hooks/useToken';
import SocialLogin from '../../../common/SocialLogin';

function Register() {
    const [loginUid, setLoginUid] = useState('');
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { registerUser, loading, setLoading } = useAuth();
    useToken(loginUid);

    // api: acf316b2a957b87a86f3e1abcff19ddc
    // url: https://api.imgbb.com/1/upload

    const onSubmit = async (data) => {
        try {
            setError(null);
            const formData = new FormData();
            formData.append('image', data.userImage[0]);
            const res = await fetch(
                'https://api.imgbb.com/1/upload?key=acf316b2a957b87a86f3e1abcff19ddc',
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const imgbbData = await res.json();
            const userRes = await registerUser(
                data.email,
                data.password,
                data.name,
                imgbbData.data.display_url
            );
            await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_devUrl}/users`,
                data: {
                    name: userRes.user.displayName,
                    email: userRes.user.email,
                    uid: userRes.user.uid,
                },
            });
            setLoginUid(userRes.user.uid);
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 p-5 shadow-xl w-full md:w-[60%] lg:w-[40%] mx-auto rounded-2xl"
            >
                <h2 className="text-3xl text-center font-semibold text-secondary mb-6">
                    Register Now
                </h2>
                {error && <p className="mb-6 text-sm text-red-600 dark:text-red-500">{error}</p>}
                <div className="mb-6">
                    <label
                        htmlFor="username-success"
                        className={`block mb-2 text-sm font-medium ${
                            errors.name
                                ? 'text-red-600 dark:text-red-500'
                                : 'text-gray-900 dark:text-gray-300'
                        }`}
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className={`block w-full text-sm ${
                            errors.name
                                ? 'border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
                                : 'text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        }`}
                        placeholder="Enter Name"
                        {...register('name', {
                            required: 'Can not left this field empty.',
                            maxLength: {
                                value: 20,
                                message: 'Name can not contain more than 20 characters',
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.name?.message}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        className={`block mb-2 text-sm font-medium ${
                            errors.userImage
                                ? 'text-red-600 dark:text-red-500'
                                : 'text-gray-900 dark:text-gray-300'
                        }`}
                        htmlFor="file_input"
                    >
                        Image
                    </label>
                    <input
                        className={`block w-full text-sm ${
                            errors.userImage
                                ? 'border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
                                : 'text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        }`}
                        type="file"
                        accept="image/*"
                        {...register('userImage', { required: 'Can not left this field empty.' })}
                    />
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.userImage?.message}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="username-error"
                        className={`block mb-2 text-sm font-medium ${
                            errors.userImage
                                ? 'text-red-600 dark:text-red-500'
                                : 'text-gray-900 dark:text-gray-300'
                        }`}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="username-error"
                        className={`block w-full text-sm ${
                            errors.password
                                ? 'border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
                                : 'text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        }`}
                        placeholder="Enter email."
                        {...register('email', { required: 'Can not left this field empty.' })}
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.email?.message}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="username-success"
                        className={`block mb-2 text-sm font-medium ${
                            errors.name
                                ? 'text-red-600 dark:text-red-500'
                                : 'text-gray-900 dark:text-gray-300'
                        }`}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="email"
                        className={`block w-full text-sm ${
                            errors.password
                                ? 'border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
                                : 'text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        }`}
                        placeholder="Enter password"
                        {...register('password', {
                            required: 'Can not left this field empty.',
                            minLength: { value: 6, message: 'Password must containe 6 characters' },
                        })}
                    />
                    {errors.password && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.password?.message}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <button
                        type="submit"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
                        disabled={loading}
                    >
                        Register
                    </button>
                </div>

                <div className="inline-flex justify-center items-center w-full mb-6">
                    <hr className="my-8 h-px bg-secondary border-0 w-full" />
                    <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
                        Or
                    </span>
                </div>
                <SocialLogin setError={setError} />
            </form>
        </div>
    );
}

export default Register;
