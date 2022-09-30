import { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import authAxios from '../../services/authAxios';
import { AuthContext } from '../../context/auth.context';
import './Forms.css'
import { Link } from 'react-router-dom';
import MultiButton from '../Buttons/MultiButton'

function LoginForm() {

    const [user, setUser] = useState({});
    const { storeToken, authentication } = useContext(AuthContext)

    const login = (eventHTML) => {

        eventHTML.preventDefault();
        authAxios.login(user).then((response) => {
            console.log(response)

            storeToken(response.token)
            authentication()
        })
    }

    const loginUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setUser({ ...user, [name]: value });
    }

    return (
        <div className='main-content'>
            <Form onSubmit={login}>
                <Form.Group className='mb-3' >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='user@user.com'
                        onChange={loginUser}
                        name='email'
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' onChange={loginUser} placeholder='your password' />
                </Form.Group>
                <MultiButton className="submit-button" nameButton={"Login"}>
                    Login
                </MultiButton>

                <p className='link-signup'>¿No tienes una cuenta?<Link to="/signup">Regístrate</Link></p>
            </Form>
        </div>
    )

}

export default LoginForm