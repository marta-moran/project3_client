import { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import authAxios from '../../services/authAxios';
import { AuthContext } from '../../context/auth.context';
import './Forms.css'
import { Link } from 'react-router-dom';
import MultiButton from '../Buttons/MultiButton'
import Message from '../Toast/Toast';
import { MessageContext } from '../../context/message.context'
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const { storeToken, authentication } = useContext(AuthContext)
    const { showMessage, setShowMessage } = useContext(MessageContext)
    const [error, setError] = useState(false)

    const login = (eventHTML) => {

        eventHTML.preventDefault();
        authAxios.login(user)
            .then((response) => {
                console.log(response)
                console.log(user)
                storeToken(response.token)
                authentication()
                navigate('/');
                setShowMessage({ show: true, title: `Hola ${user.email}`, text: "🔥️a matchear🔥️" })

            })
            .catch((response) => {
                console.log(response)
                if (response.code === "ERR_BAD_RESPONSE") {
                    setError(true)
                    setShowMessage({ show: true, title: `Error`, text: "Nombre y/o usuario incorrectos" })
                }
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
                <Form.Group className='mb-3' >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' onChange={loginUser} placeholder='your password' />
                </Form.Group>
                <MultiButton className="submit-button" nameButton={"Login"}>
                    Login
                </MultiButton>

                <p className='link-signup'>¿No tienes una cuenta?<Link to="/signup">Regístrate</Link></p>
            </Form>

            {showMessage.show && <Message />}
        </div>
    )

}

export default LoginForm