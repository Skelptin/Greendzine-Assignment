import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Input, InputLabel } from '@mui/material';
import Logo from '../assets/Logo2.png';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import './Login.css';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            return;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            return;
        } else if (password.length < 8) {
            setPasswordError('Must be at least 8 characters long');
            return;
        } else {
            setPasswordError('');
        }

        if (!(emailError && passwordError)) {
            navigate('/home')
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='shadow-lg rounded items-center px-8 pt-6 pb-8 mb-4'>
                <img className='mx-auto m-10' src={Logo} alt='Logo' />
                <p className='m-10 text-center para text-2xl ' >We are Electric</p>
                <div className='form relative'>
                    <div className='mb-4 grid'>
                        <label htmlFor='email'>E-mail</label>
                        <Input
                            sx={{
                                width: '20rem',
                                height: '2.5rem',

                                backgroundColor: 'white'
                            }}
                            className='input rounded-2xl'
                            id='email'
                            placeholder='Enter E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className='text-red-400'>{emailError}</p>}
                    </div>
                    <div className='mb-6 grid'>
                        <label htmlFor='password'>Password</label>
                        <div className="relative">
                            <Input
                                sx={{
                                    width: '20rem',
                                    height: '2.5rem',
                                    paddingRight: '2.5rem',
                                    backgroundColor: 'white'
                                }}
                                className='input text-white rounded-2xl'
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type='button'
                                className='text-black toggle-password absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                        {passwordError && <p className='text-red-400'>{passwordError}</p>}
                    </div>
                    <div className='text-center btn'>
                        <button
                            className='btn text-slate-200 font-bold py-2 px-4 focus:outline-none focus:shadow-outline'
                            type='submit'
                        >
                            Login
                        </button>
                    </div>
                    <p className='text-green-400 text-center m-8'>
                        Forgot Password?
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
