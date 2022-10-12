import userAxios from "../../services/userAxios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './profile.css'
import { IconButton } from "@mui/material";


function Profile() {
    const [oneUser, setOneUser] = useState({})
    const { id } = useParams();

    useEffect(() => {
        userAxios.getOnePerson(id)
            .then((user) => {
                // console.log(user)
                setOneUser(user)
            })
            .catch((err) => console.log(err))
    }, [])

    // console.log(oneUser)



    return (
        <div className="info-user">
            <div className="img-container">
                <img src={oneUser.picture} alt="" style={{ width: '80vw' }} />
            </div>
            <div className="title">
                <h2>{oneUser.username}</h2>
                <h3>{oneUser.age}</h3>
            </div>
            <div className="description">
                <p>{oneUser.description}</p>
            </div>
            <div className="preferences">
                {
                    oneUser.preferences?.map((element) => {
                        return (
                            <p key={element}>{element}</p>
                        )

                    })
                }
            </div>
            <div className="icon">
                <IconButton><Link to="/"><ArrowBackIcon /></Link></IconButton>
            </div>
        </div>

    )

}

export default Profile