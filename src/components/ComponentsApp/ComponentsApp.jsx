import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/Login';
import HomePage from '../../pages/HomePage/Home';
import NavBar from '../NavBar/NavBar';


function ComponentsApp() {
    return (
        <div>
            <NavBar>
            </NavBar>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </div >
    )
}

export default ComponentsApp


