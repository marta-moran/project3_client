import { width } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AppRoutes from './components/routes/AppRoutes';
// import Background from '..public/Background.png'

function App() {
  return (
    <div className="App">

      <NavBar />
      <AppRoutes />
    </div>



  );
}

export default App;
