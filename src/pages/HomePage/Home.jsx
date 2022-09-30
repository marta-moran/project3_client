import Slider from "../../components/Home/Slider/Slider"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth.context';

import userAxios from "../../services/userAxios";

function Home() {
    // const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
    const { user, storeToken, authentication } = useContext(AuthContext)

    const [newUsers, setNewUsers] = useState({})

    useEffect(() => {
        authentication()
        userAxios.getAllPeople()
            .then((users) => {
                setNewUsers(users)

            })
            .catch(error => console.log(error))
    }, [])
    console.log(newUsers)



    return (
        //map
        // user ? <Card user={user}></Card> : <Slider></Slider>
        <div>

            <h1>{user.username}</h1>

        </div>



    )
}

export default Home