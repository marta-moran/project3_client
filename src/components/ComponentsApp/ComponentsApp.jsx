import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/Login';
import HomePage from '../../pages/HomePage/Home';
import NavBar from '../NavBar/NavBar';
import ProfilePage from '../../pages/ProfilePage/Profile';
import MatchesPage from '../../pages/MatchesPage/Matches';
import ChatPage from '../../pages/ChatPage/Chat';
import SignupPage from '../../pages/SignUpPage/Signup';
import CanvasPage from '../../pages/CanvasPage/Canvas.jsx';


function ComponentsApp() {
    return (
        <div>
            <NavBar>
            </NavBar>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/profile/:id' element={<ProfilePage />} />
                <Route path='/matches' element={<MatchesPage />} />
                <Route path='/chat' element={<ChatPage />} />
                <Route path='/canvas' element={<CanvasPage />} />
            </Routes>
        </div>
    )
}

export default ComponentsApp


