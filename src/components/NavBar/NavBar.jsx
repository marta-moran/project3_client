import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logofake.svg'

function NavBar() {
    return (
        <div>
            <Navbar>
                <Container>
                    <img className="me-1" src={logo} alt='' style={{ width: '2%' }}></img>
                    <Navbar.Brand as="span">El tinder</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as='span'>
                            <Link className='link-react' to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
                            <Link className='link-react' to="/login">Login</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
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
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar