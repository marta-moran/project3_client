import { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import authAxios from '../../services/authAxios';
import MultiButton from '../Buttons/MultiButton';
import { Navigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const SignUpForm = () => {
    const [user, setUser] = useState({})
    const [formFields, setFormFields] = useState(1)
    const [change, setChange] = useState(false);

    /* hacer en una única función */
    const handleChange = () => setFormFields(formFields + 1);
    const handleBack = () => setFormFields(formFields - 1);


    const signUp = (eventHTML) => {

        eventHTML.preventDefault();
        authAxios.signup(user).then((response) => {
            console.log("--------");
            console.log(response);
        }).then(() => setChange(true));
        //setChange(true);
    }

    const createNewUser = (eventHTML) => {

        const { name, value } = eventHTML.target;
        console.log(value)

        setUser({ ...user, [name]: value });
        console.log(user)
    };

    return (


        <div>
            <Container className='main-content-signup'>
                <Form onSubmit={signUp}>
                    {
                        formFields === 1 &&
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type='text' name='username' placeholder='Pepe, Ana...' onChange={createNewUser} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>email</Form.Label>
                                <Form.Control type='email' name='email' placeholder='Pepe@pepe.com' onChange={createNewUser} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' name='password' placeholder='Tu password' onChange={createNewUser} required />
                            </Form.Group>
                            <div className='logo-div'>
                                <NavigateNextIcon sx={{ fontSize: 40 }} onClick={handleChange} />
                            </div>

                        </>
                    }
                    {
                        formFields === 2 &&
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type='number' name='age' placeholder='25' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Género</Form.Label>
                                <Form.Select aria-label="Default select example" name='gender' onChange={createNewUser} >
                                    <option>Open this select menu</option>
                                    <option value="woman">Mujer</option>
                                    <option value="man">Hombre</option>
                                    <option value="other">Otro</option>
                                </Form.Select>
                            </Form.Group>
                            <div className='flex-buttons'>
                                <div className='logo-div'>
                                    <NavigateBeforeIcon sx={{ fontSize: 40 }} onClick={handleBack} />
                                </div>
                                <div className='logo-div'>
                                    <NavigateNextIcon sx={{ fontSize: 40 }} onClick={handleChange} />
                                </div>
                            </div>

                        </>
                    }
                    {
                        formFields === 3 &&
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Label>Intereses</Form.Label>
                                <Form.Control type='text' name='preferences' placeholder='Croquetas, Baile...' onChange={createNewUser} />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Sobre mí</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                    onChange={createNewUser} />
                            </Form.Group>
                            <div className='flex-buttons'>
                                <div className='logo-div'>
                                    <NavigateBeforeIcon sx={{ fontSize: 40 }} onClick={handleBack} />
                                </div>
                            </div>
                            <MultiButton variant='primary' type='submit' onChange={signUp} nameButton={"Registrarse"}>
                                Registrarse

                            </MultiButton>
                        </>
                    }
                    {change && (<Navigate to="/login"></Navigate>)}

                </Form>

            </Container>
        </div>


    )
}


export default SignUpForm