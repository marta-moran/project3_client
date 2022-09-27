import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import UserAxios from "../../services/userAxios";

const SignUpForm = () => {
    const [user, setUser] = useState({})

    const createNewUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        // setUser({ ...user, [name]: value });
        console.log(value)
    };

    return (
        <div className='container'>

            <Form onSubmit={createNewUser}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='text' name='username' placeholder='Pepe, Ana...' onChange={createNewUser} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>email</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Pepe@pepe.com' onChange={createNewUser} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Tu password' onChange={createNewUser} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type='number' name='age' placeholder='25' onChange={createNewUser} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Género</Form.Label>
                    <Form.Control type='text' name='gender' placeholder='Masculino, femenino...' onChange={createNewUser} />
                </Form.Group>
                {/* aqui va el dibujo del perfil */}
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Dibujo de perfil</Form.Label>
                    <Form.Control type='' name='picture' placeholder='' onChange={createNewUser} />
                </Form.Group>
                {/* Dibujo de perfil */}
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Descripción y aficiones</Form.Label>
                    <Form.Control size='lg' type='text' name='preferences' placeholder='Ver películas de Steven Seagal, bailar la música del telediario...' onChange={createNewUser} />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Registrarse
                </Button>
            </Form>
        </div >
    )
}

export default SignUpForm