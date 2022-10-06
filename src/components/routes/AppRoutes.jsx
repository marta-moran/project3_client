import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/Home'
import LoginPage from '../../pages/LoginPage/Login'
import SignupPage from '../../pages/SignUpPage/Signup'
import ProfilePage from '../../pages/ProfilePage/Profile'
import MatchesPage from '../../pages/MatchesPage/Matches'
import ChatPage from '../../pages/MatchesPage/Matches'
import EditProfile from '../../pages/ProfilePage/EditProfile';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/edit' element={<EditProfile />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
            <Route path='/matches' element={<MatchesPage />} />
        </Routes>
    )
}

export default AppRoutes