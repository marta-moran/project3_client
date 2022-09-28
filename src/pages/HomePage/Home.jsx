import Slider from "../../components/Home/Slider/Slider"
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function Home() {
    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);

    console.log("usuarioo", user)


    return (
        user ? <h1>hola {user.username}</h1> : <Slider></Slider>

        //user ? componente card : slider


    )
}

export default Home