import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logofake.svg'
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <Navbar className="navBar">
                <Container>
                    <img className="me-1" src={logo} alt='' style={{ width: '2%' }}></img>
                    <Nav className='me-auto'>
                        <Navbar.Brand as="span">
                            <Link className='link-react' to="/">El tinder</Link>
                        </Navbar.Brand>
                        <Nav.Link as='span'>
                            <Link className='link-react' to="/login">Login</Link>
                        </Nav.Link>
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
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar