import { useEffect, useState } from 'react'
import { Form, Container } from 'react-bootstrap'
import authAxios from '../../services/authAxios';
import MultiButton from '../Buttons/MultiButton';
import { Navigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Canvas from '../Canvas/Canvas'

const SignUpForm = () => {
    const [user, setUser] = useState({})
    const [formFields, setFormFields] = useState(1)
    const [change, setChange] = useState(false);
    const [arrPreferences, setArrPreferences] = useState([])

    /* hacer en una única función */
    const handleChange = () => setFormFields(formFields + 1);
    const handleBack = () => setFormFields(formFields - 1);

    function handleCheck({ target }) {
        const { name, value, checked } = target
        if (checked) {
            setArrPreferences([...arrPreferences, value])
        } else {
            arrPreferences.pop(value)
        }
        setUser({ ...user, [name]: [...arrPreferences, value] })
    }

    useEffect(() => {
        console.log(user)
    }, [arrPreferences, user])


    const signUp = (eventHTML) => {

        eventHTML.preventDefault();
        authAxios.signup(user).then((response) => {

            //llamar a guardar canvas
            console.log("--------");
            console.log(response);
        }).then(() => setChange(true));
        //setChange(true);
    }

    const createNewUser = (eventHTML) => {

        const { name, value } = eventHTML.target;
        console.log()

        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        console.log(user)
    }, [user])


    return (


        <div>
            <Container className='main-content-signup'>
                <Form onSubmit={signUp}>
                    {
                        formFields === 1 &&
                        <div className='input-color'>
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
                            <div className='flex-buttons'>
                                <div className='logo-div'>
                                    <NavigateNextIcon sx={{ fontSize: 40 }} onClick={handleChange} />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        formFields === 2 &&
                        <div className='input-color'>
                            <Form.Group className='mb-3'>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type='number' name='age' placeholder='25' onChange={createNewUser} />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Género</Form.Label>
                                <Form.Select aria-label="Default select example" name='gender' onChange={createNewUser}>
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

                        </div>
                    }
                    {
                        formFields === 3 &&
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Label>Intereses</Form.Label>
                                <div className='checkboxes'>
                                    <div className='box'>
                                        <div>
                                            <label htmlFor="animales">Animales</label>
                                            <input type="checkbox" value="Animales" name="preferences" onChange={handleCheck} id="animales" />
                                        </div>
                                        <div>
                                            <label htmlFor="cerveza">Cerveza</label>
                                            <input type="checkbox" value="Cerveza" name="preferences" onChange={handleCheck} id="cerveza" />
                                        </div>
                                        <div>
                                            <label htmlFor="bailar">Bailar</label>
                                            <input type="checkbox" value="Bailar" name="preferences" onChange={handleCheck} id="bailar" />
                                        </div>
                                        <div>
                                            <label htmlFor="gym">Gym</label>
                                            <input type="checkbox" value="Gym" name="preferences" onChange={handleCheck} id="gym" />
                                        </div>

                                        {/* <label htmlFor="fiesta">Fiesta</label> */}
                                        {/* <input type="checkbox" value="Fiesta" name="preferences" onChange={handleCheck} id="fiesta" /> */}
                                    </div>
                                    <div className='box'>
                                        <div>
                                            <label htmlFor="fumar">Fumar</label>
                                            <input type="checkbox" value="Fumar" name="preferences" onChange={handleCheck} id="fumar" />
                                        </div>
                                        <div>
                                            <label htmlFor="videojuegos">Videojuegos</label>
                                            <input type="checkbox" value="Videojuegos" name="preferences" onChange={handleCheck} id="videojuegos" />
                                        </div>
                                        <div>
                                            <label htmlFor="musica">Música</label>
                                            <input type="checkbox" value="Música" name="preferences" onChange={handleCheck} id="musica" />
                                        </div>
                                        <div>
                                            <label htmlFor="vino">Vino</label>
                                            <input type="checkbox" value="Vino" name="preferences" onChange={handleCheck} id="vino" />
                                        </div>
                                    </div>

                                </div>
                                {/* <Form.Select aria-label="Default select example" name='preferences' multiple={true} onChange={createNewUser} > */}

                                {/* </Form.Select> */}
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
                                <div className='logo-div'>
                                    <NavigateNextIcon sx={{ fontSize: 40 }} onClick={handleChange} />
                                </div>
                            </div>
                        </>
                    }
                    {
                        formFields === 4 &&
                        <>
                            <Canvas name="picture" setCanvas={createNewUser} ></Canvas>
                            <div className='flex-buttons'>
                                <div className='logo-div'>
                                    <NavigateBeforeIcon sx={{ fontSize: 40 }} onClick={handleBack} />
                                </div>
                                <MultiButton variant='primary' type='submit' onChange={signUp} nameButton={"Registrarse"}>
                                    Registrarse
                                </MultiButton>
                            </div>
                        </>
                    }
                    {change && (<Navigate to="/login"></Navigate>)}

                </Form>

            </Container>
        </div>


    )
}


export default SignUpForm