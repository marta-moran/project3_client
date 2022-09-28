import { useState, useContext } from 'react';

import LoginForm from '../../components/Forms/LoginForm';
import authAxios from '../../services/authAxios';
// import { AuthContext } from '../context/auth.context';

const LoginPage = () => {

    return (
        <LoginForm></LoginForm>
    )
};

export default LoginPage;