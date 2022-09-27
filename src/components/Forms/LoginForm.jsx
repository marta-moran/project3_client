import { Button, Form } from 'react-bootstrap';

function LoginForm() {

    const handleSubmit = () => {



    }


    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='user@user.com'
                        name='email'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='your password' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    )

}

export default LoginForm