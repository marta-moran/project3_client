import { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import authAxios from '../../services/authAxios';
// import { AuthContext } from '../context/auth.context';

const LoginPage = () => {
    // const [user, setUser] = useState({});
    // //   const { storeToken, authentication } = useContext(AuthContext);

    // const login = (eventHTML) => {
    //     eventHTML.preventDefault();
    //     authAxios.login(user).then((response) => {
    //         console.log("hola")
    //         //   storeToken(response.token);
    //         //   authentication();
    //     })
    // };

    // const updateUser = (eventHTML) => {
    //     const { value, name } = eventHTML.target;
    //     setUser({ ...user, [name]: value });
    // };

    return (
        <h1>Holaaa funciona la ruta /login</h1>
    )
};

export default LoginPage;