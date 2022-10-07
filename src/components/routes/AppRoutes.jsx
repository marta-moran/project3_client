import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/Home'
import LoginPage from '../../pages/LoginPage/Login'
import SignupPage from '../../pages/SignUpPage/Signup'
import MatchesPage from '../../pages/MatchesPage/Matches'
import ChatPage from '../../pages/MatchesPage/Matches'
import ProfileEdit from '../../pages/ProfilePage/ProfileEdit';
import ProfilePage from '../../pages/ProfilePage/Profile';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            {/* <Route path='/profile' element={<ProfilePage />} /> */}
            <Route path='/edit' element={<ProfileEdit />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/matches' element={<MatchesPage />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
        </Routes>
    )
}

export default AppRoutes