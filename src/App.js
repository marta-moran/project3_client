<<<<<<< HEAD

=======
>>>>>>> 0003eee3e73311a303328737f87d5ab95c6ea31e
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/Login';
import HomePage from './pages/HomePage/Home';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <h1>App Proyecto 3</h1>
=======
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
>>>>>>> 0003eee3e73311a303328737f87d5ab95c6ea31e
    </div>
  );
}

export default App;
