import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import userAxios from "../../services/userAxios"
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Canvas from '../Canvas/Canvas'
import SettingsIcon from '@mui/icons-material/Settings'
import Dropdown from 'react-bootstrap/Dropdown'

import './Forms.css'


const EditUser = () => {

    const { logOut } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const [formFields, setFormFields] = useState(1)
    const [UserEdit, setUser] = useState(user)
    const [arrPreferences, setArrPreferences] = useState([])
    const navigate = useNavigate();


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


    const newUser = (eventHTML) => {

        const { value, name } = eventHTML.target;
        setUser({ ...UserEdit, [name]: value })
        console.log(UserEdit)
    }

    const updateUser = (eventHTML) => {
        eventHTML.preventDefault();
        userAxios.edit(UserEdit).then(() =>
            navigate('/')

        )
    }

    const deleteUser = (user) => {
        userAxios
            .delete(user)
            .then(() => {
                logOut()
                navigate('/')
            })
    }

    const loginOut = (user) => {
        logOut()
        navigate('/')
    }

    return (
        <Container className='main-content-signup input-color'>
            <Form onSubmit={updateUser} >
                {
                    formFields === 1 &&
                    <div>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type='text' name='username' onChange={newUser} value={UserEdit?.username} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type='number' name='age' onChange={newUser} value={UserEdit?.age} />
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
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Sobre mí</Form.Label>
                            <Form.Control
                                as="textarea"
                                name='description'
                                style={{ height: '20vh' }}
                                onChange={newUser} />
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
                        <Canvas name="picture" setCanvas={newUser} ></Canvas>
                        <div className='flex-buttons'>
                            <div className='logo-div'>
                                <NavigateBeforeIcon sx={{ fontSize: 40 }} onClick={handleBack} />
                            </div>

                        </div>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <SettingsIcon></SettingsIcon>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={updateUser}>Update</Dropdown.Item>
                                    <Dropdown.Item onClick={deleteUser}>Delete</Dropdown.Item>
                                    <Dropdown.Item onClick={() => loginOut()}>LogOut</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </>

                }






            </Form>
        </Container >
    );
};






export default EditUser


