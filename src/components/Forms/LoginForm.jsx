import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import authAxios from '../../services/authAxios';

function LoginForm() {

    const [user, setUser] = useState({});
    // const {storeToken, authentication} = useContext(AuthContext)

    const login = (eventHTML) => {

        eventHTML.preventDefault();
        authAxios.login(user).then((response) => {
            console.log(response)

            //storeToken(response.token)
            // authentication
        })
    }

    const loginUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setUser({ ...user, [name]: value });
    }


    return (
        <div className='container'>
            <Form onSubmit={login}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='user@user.com'
                        onChange={loginUser}
                        name='email'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' onChange={loginUser} placeholder='your password' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    )

}

export default LoginForm