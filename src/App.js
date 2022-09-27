import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/Login';
import HomePage from './pages/HomePage/Home';
import SignupPage from './pages/SignUpPage/Signup';
import MatchesPage from './pages/MatchesPage/Matches';
import ProfilePage from './pages/ProfilePage/Profile';
import ChatPage from './pages/ChatPage/Chat';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/matches' element={<MatchesPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
