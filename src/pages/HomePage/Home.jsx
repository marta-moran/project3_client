import Slider from "../../components/Home/Slider/Slider"
import { useContext } from 'react';
import LoginForm from '../../components/Forms/LoginForm';
// import authAxios from '../../services/authAxios';
import { AuthContext } from '../../context/auth.context';
function Home() {
    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);

    console.log("usuarioo", user)


    return (
        user ? <h1>hola {user.username}</h1> : <h1>quien eres</h1>

        //user ? componente card : slider


    )


    // <div>
    //     <Slider></Slider>
    // </div>

}

export default Home