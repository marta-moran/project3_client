import Slider from "../../components/Home/Slider/Slider"
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import Simple from "../../components/Home/Card/Card";



function Home() {
    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);

    return (
        <Slider />



    )
}

export default Home