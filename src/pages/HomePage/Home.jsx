import Slider from "../../components/Home/Slider/Slider"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import Card from "../../components/Home/Card/Card"
import userAxios from "../../services/userAxios";
import './HomeStyle.css'

function Home() {
    // const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
    const { user } = useContext(AuthContext)

    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        userAxios.getAllPeople()
            .then((users) => {
                setNewUsers(users)
            })
            .catch(error => console.log(error))
    }, [])

    return (

        user ?
            newUsers.map((oneUser) => {
                return (
                    <div key={oneUser._id} className="flex-cards">
                        <Card key={oneUser.email} oneUser={oneUser}></Card>
                    </div>

                )
            })
            : <Slider></Slider>
    )
}

export default Home