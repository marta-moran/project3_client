import Slider from "../../components/Home/Slider/Slider"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth.context';

import userAxios from "../../services/userAxios";
import Card from "../../components/Home/Card/Card";
import LikeButton from "../../components/Buttons/LikeButton";
import '../../components/Buttons/Buttons.css'

function Home() {
    // const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
    const { user, storeToken, authentication } = useContext(AuthContext)

    const [newUsers, setNewUsers] = useState([])

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

        <>
            {user ?
                newUsers.map((user, index) => {
                    console.log(index)
                    return (
                        <>
                            <div key={user._id}>
                                <Card key={user.email} user={user} index={index}></Card>


                            </div>
                        </>
                    )
                })
                : <Slider></Slider>}


            <div className="likeButton">
                <LikeButton></LikeButton>
            </div>
        </>

    )
}

export default Home