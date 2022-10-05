import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import userAxios from "../../services/userAxios"
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import * as React from 'react';


const ProfileComponent = () => {

    const { logOut } = React.useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const [UserEdit, setUser] = useState(user)
    const navigate = useNavigate();



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



    return (
        <Container className='main-content-signup'>
            <>
                < Form onSubmit={updateUser} >
                    <Form.Group className='mb-3'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type='text' name='username' onChange={newUser} value={UserEdit?.username} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type='number' name='age' onChange={newUser} value={UserEdit?.age} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Preferences</Form.Label>
                        <Form.Control type='text' name='preferences' onChange={newUser} value={UserEdit?.preferences} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Sobre mí</Form.Label>
                        <Form.Control
                            as="textarea"
                            name='description'
                            style={{ height: '100px' }}
                            onChange={newUser} />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Update
                    </Button>
                    <Button variant='primary' onClick={deleteUser}>Delete User</Button>
                </Form>
            </>

        </Container>
    );
};






export default ProfileComponent


