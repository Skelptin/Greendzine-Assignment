import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import User from '../pages/User'

const routes = () => {
    return (

        <Routes>
            <Route exact path='/' element={<LoginPage />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/user' element={<User />} />
        </Routes>

    )
}

export default routes