
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AppRoutes from './components/routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>



  );
}

export default App;
