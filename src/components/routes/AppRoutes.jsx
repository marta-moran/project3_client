import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../../pages/HomePage/Home'
import LoginPage from '../../pages/LoginPage/Login'
import SignupPage from '../../pages/SignUpPage/Signup'
import MatchesPage from '../../pages/MatchesPage/Matches'
import ChatPage from '../../pages/ChatPage/Chat'

import ProfilePage from '../../pages/ProfilePage/Profile';
import ProfileEdit from '../../pages/ProfilePage/ProfileEdit';

// import Socket from '../Chat/Socket'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/chat/:id' element={<ChatPage />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
            <Route path='/matches' element={<MatchesPage />} />
            <Route path='/edit' element={<ProfileEdit />} />
        </Routes>
    )
}

export default AppRoutes