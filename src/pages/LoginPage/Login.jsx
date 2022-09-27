import { useState, useContext } from 'react';

import LoginForm from '../../components/Forms/LoginForm';
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
        <LoginForm></LoginForm>
    )
};

export default LoginPage;