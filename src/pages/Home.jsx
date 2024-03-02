import React from 'react'
import Header from '@/components/Header'
import MLogo1 from '../assets/MLogo2.png'
import Call from '../assets/call1.png'
import BorderLinearProgress from '@mui/material/LinearProgress';
import './Home.css'

const Home = () => {



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

            <div className='text-center mt-10 '>
                <div className="mx-auto w-2/3">
                    <img
                        className='mx-auto'
                        src={MLogo1}
                        alt="MOPTro"
                        width='70px'
                    />

                    <div className='mt-10'>
                        <h3 className='relative header z-10 p-3 text-center rounded-3xl'>Employee Productivity Dashboard</h3>
                        <div className='relative -top-16 md:-top-12 body rounded-3xl' style={{ height: '70vh' }}>
                            <div className='relative text-left p-2 top-10'>
                                <div className='flex justify-between mt-10 md:mt-5'>
                                    <p>Productivity On Monday</p>
                                    <span>4%</span>
                                </div>
                                <BorderLinearProgress
                                    sx={{
                                        // border:'1px solid',
                                        // borderColor:'green',
                                        margin: '0.5rem',
                                        borderRadius: '2rem',
                                        height: '0.5rem',
                                        background: 'transparent',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#36A546'
                                        }
                                    }}
                                    variant="determinate" value={4} />

                            </div>

                            <div className='relative text-left p-2 top-10'>
                                <div className='flex justify-between'>
                                    <p>Productivity On Tuesday</p>
                                    <span>10%</span>
                                </div>
                                <BorderLinearProgress
                                    sx={{
                                        margin: '0.5rem',

                                        borderRadius: '2rem',
                                        height: '0.5rem',
                                        background: 'transparent',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#36A546'
                                        }
                                    }}
                                    variant="determinate" value={10} />

                            </div>

                            <div className='relative text-left p-2 top-10'>
                                <div className='flex justify-between'>
                                    <p>Productivity On Wednesday</p>
                                    <span>40%</span>
                                </div>
                                <BorderLinearProgress
                                    sx={{
                                        margin: '0.5rem',
                                        borderRadius: '2rem',
                                        height: '0.5rem',
                                        background: 'transparent',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#36A546'
                                        }
                                    }}
                                    variant="determinate" value={40} />
                            </div>
                            <div className='relative text-left p-2 top-10'>
                                <div className='flex justify-between'>
                                    <p>Productivity On Thursday</p>
                                    <span>23%</span>
                                </div>
                                <BorderLinearProgress
                                    sx={{
                                        margin: '0.5rem',
                                        borderRadius: '2rem',
                                        height: '0.5rem',
                                        background: 'transparent',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#36A546'
                                        }
                                    }}
                                    variant="determinate" value={23} />
                            </div>
                            <div className='relative text-left p-2 top-10'>
                                <div className='flex justify-between'>
                                    <p>Productivity On Friday</p>
                                    <span>70%</span>
                                </div>
                                <BorderLinearProgress
                                    sx={{
                                        margin: '0.5rem',
                                        borderRadius: '2rem',
                                        height: '0.5rem',
                                        background: 'transparent',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#36A546'
                                        }
                                    }}
                                    variant="determinate" value={70} />
                            </div>
                            <div className='relative text-left p-2 top-10'>
                                <div className='flex justify-between'>
                                    <p>Productivity On Saturday</p>
                                    <span>54%</span>
                                </div>
                                <BorderLinearProgress
                                    sx={{
                                        margin: '0.5rem',
                                        borderRadius: '2rem',
                                        height: '0.5rem',
                                        background: 'transparent',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#36A546'
                                        }
                                    }}
                                    variant="determinate" value={54} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home