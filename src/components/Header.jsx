import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo2.png'
import { Drawer } from '@mui/material'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
    const [mouseEnter, setMouseEnter] = useState(false)

    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', link: '/home' },
        { name: 'User', link: '/user' }
    ]

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <header>
            <nav className='flex bg-black shadow-2xl justify-between md:justify-around items-center'>
                <Link to='/'>
                    <img src={Logo} width='60px' alt='Logo' />
                </Link>

                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map(({ name, link }) => (
                        <Link key={link} to={link}>
                            {name}
                        </Link>
                    ))}
                    <Button onClick={() => navigate('/')} variant='outline' className='rounded-xl'>
                        Log In
                    </Button>
                </div>
                <div className="md:hidden">

                    <Button onClick={() => setOpenDrawer(true)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </Button>

                    <Drawer
                        anchor='right'
                        open={openDrawer}
                        onClose={() => toggleDrawer(false)}
                        sx={{ width: '300px' }}
                    >
                        <div className='p-4 grid items-center'>
                            <div className='flex items-center justify-between w-40 '>

                                <MdKeyboardDoubleArrowRight onClick={() => setOpenDrawer(false)} className='pointer' />
                                <Button onClick={() => navigate('/')} variant='outline' className='rounded-xl'>
                                    Log In
                                </Button>
                            </div>
                            {navLinks.map(({ name, link }) => (
                                <Link key={link} to={link} onClick={() => setOpenDrawer(false)} onMouseLeave={() => setMouseEnter(false)} onMouseEnter={() => setMouseEnter(true)} className=' w-full mt-8'>
                                    {name}
                                </Link>
                            ))}

                        </div>
                    </Drawer>


                </div>
            </nav>
        </header>
    )
}

export default Header;
