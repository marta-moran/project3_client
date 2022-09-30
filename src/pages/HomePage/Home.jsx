import Slider from "../../components/Home/Slider/Slider"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import Card from "../../components/Home/Card/Card"
import userAxios from "../../services/userAxios";
import './HomeStyle.css'

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

    return (

        user ?
            newUsers.map((user) => {
                return (
                    <div key={user._id} className="flex-cards">
                        <Card key={user.email} user={user}></Card>
                    </div>

                )
            })
            : <Slider></Slider>
    )
}

export default Home