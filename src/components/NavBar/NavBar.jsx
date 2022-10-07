import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logofake.svg'
import { AuthContext } from "../../context/auth.context";
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import './NavBar.css'
import ProfileButton from "../Buttons/ProfileButton";

import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";
import { IconButton } from "@mui/material";


function NavBar() {
    const { user, logOut } = React.useContext(AuthContext)
    return (
        <div>
            <Navbar className="navBar">
                <Container>
                    <img className="me-1" src={logo} alt='' style={{ width: '15%' }}></img>
                    <Nav className='me-auto'>
                        <Navbar.Brand as="span">

                            <Link className='link-react' to="/"><span>Pinter</span></Link>

                        </Navbar.Brand>
                    </Nav>
                    <Nav className='me-auto'>
                        <Navbar.Brand as="span">
                            {
                                user ? <IconButton> <Link to='/edit'> <ProfileButton ></ProfileButton> </Link> </IconButton> : null
                            }
                        </Navbar.Brand>
                    </Nav>
                    <div className="flex-nav">
                        <Nav className='me-auto'>
                            <Nav.Link as='span'>
                                <Link className='link-react me-2' to="/login">
                                    {
                                        user ? null : <LoginIcon sx={{ fontSize: 40, color: 'pink' }}></LoginIcon>
                                    }


                                </Link>
                            </Nav.Link>
                            <Nav className='me-auto'>
                                <Navbar.Brand as="span">
                                    {

                                        user ? <IconButton><Link to='/matches'> <LocalFireDepartment sx={{ fontSize: 40, color: 'red' }}></LocalFireDepartment> </Link> </IconButton> : null

                                    }
                                </Navbar.Brand>
                            </Nav>
                        </Nav>
                    </div>

                    {/* <Nav.Link as='span'>
                            <Link className='link-react' to="/signup">Signup</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
                            <Link className='link-react' to="/profile/:id">Profile</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
                            <Link className='link-react' to="/matches">Matches</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
                            <Link className='link-react' to="/chat">Chat</Link>
                        </Nav.Link> */}

                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar