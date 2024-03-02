import React, { useState } from 'react';
import Header from '@/components/Header';
import MLogo1 from '../assets/MLogo2.png';
import { InputAdornment, Input } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import Call from '../assets/call1.png';

import './User.css';
import { emplList } from '../utils/EmployeeList';

const User = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const list = emplList();

    const filteredList = list.filter(
        item => item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex justify-end'>
                <img
                    className=''
                    src={Call}
                    alt='Call Logo'
                    width='50px'
                />
            </div>

            <div className='text-center mt-10'>
                <div className="mx-auto w-2/3">
                    <img
                        className='mx-auto'
                        src={MLogo1}
                        alt="MOPTro"
                        width='70px'
                    />

                    <div className="relative">
                        <Input
                            className='input p-2 '
                            sx={{
                                background: 'grey',
                                borderRadius: '1rem',
                                margin: '2vw',
                                '&::placeholder': {
                                    color: 'white'
                                }
                            }}
                            placeholder='Search with name '
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <FaSearch className="text-white" />
                                </InputAdornment>
                            }
                        />
                    </div>

                    <div className='grid-cols-1 grid md:grid-cols-3'>

                        {filteredList.map((item, index) => (
                            <div key={index} className='card w-50 gap-5 grid m-2 text-left -top-16 md:-top-12 body rounded-3xl p-3' >
                                <span className='text-right'>{index + 1}</span>
                                <span>EMP ID: {item.emp_id} </span>
                                <span>Name: {item.name}</span>
                                <span>DOB: {item.DOB}</span>
                                <span>Role: {item.Role}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default User;
