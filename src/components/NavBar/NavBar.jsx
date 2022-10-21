import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logofake.svg'
// import logo2 from './logo-sin-bg.png'
import { AuthContext } from "../../context/auth.context";
import LoginIcon from '@mui/icons-material/Login';
import './NavBar.css'
import { useContext } from "react";
import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavBar() {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar className="navBar" id="navbar">
                <Container>
                    <img className="me-1" src={logo} alt='' style={{ width: '15%' }}></img>
                    <Nav className='me-auto'>
                        <Navbar.Brand as="span">

                            <Link className='link-react' to="/"><span>Pinter</span></Link>

                        </Navbar.Brand>
                    </Nav>
                    <div className="flex-nav">
                        <Nav className='me-auto'>
                            <Nav.Link as='span'>
                                {
                                    user ? <IconButton><Link to={`/profile/${user._id}`}><AccountCircleIcon sx={{ fontSize: 40, color: 'black', marginLeft: '10vw' }} /></Link></IconButton> : null
                                }
                            </Nav.Link>
                            <Nav className='me-auto'>
                                <Navbar.Brand as="span">
                                    {
                                        user ? <IconButton><Link to='/matches'> <LocalFireDepartment sx={{ fontSize: 42, color: '#f65858' }}></LocalFireDepartment> </Link> </IconButton> : null
                                    }
                                </Navbar.Brand>
                            </Nav>
                            <Link className='link-react me-2' to="/login">
                                {
                                    user ? null : <LoginIcon sx={{ fontSize: 40, color: 'pink' }}></LoginIcon>
                                }
                            </Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar