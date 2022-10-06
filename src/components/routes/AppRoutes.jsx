import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/Home'
import LoginPage from '../../pages/LoginPage/Login'
import SignupPage from '../../pages/SignUpPage/Signup'

import MatchesPage from '../../pages/MatchesPage/Matches'
// import ChatPage from '../../pages/MatchesPage/Matches'
import EditPage from '../../pages/ProfilePage/ProfileEdit';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/edit' element={<EditPage />} />
            {/* <Route path='/chat' element={<ChatPage />} /> */}
            <Route path='/matches' element={<MatchesPage />} />
            {/* <Route path='/profile/:id' element={<ProfilePage />} /> */}
        </Routes>
    )
}

export default AppRoutes