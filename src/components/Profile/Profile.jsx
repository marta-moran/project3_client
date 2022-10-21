import userAxios from "../../services/userAxios";
import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateIcon from '@mui/icons-material/Create';
import './profile.css'
import { IconButton } from "@mui/material";
import { AuthContext } from "../../context/auth.context";

function Profile() {
    const [oneUser, setOneUser] = useState({})
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();


    useEffect(() => {
        userAxios.getOnePerson(id)
            .then((user) => {
                setOneUser(user)
            })
            .catch((err) => console.log(err))
    }, [id])

    const loginOut = (user) => {
        logOut()
        navigate('/')
    }


    return (



        <div className="info-user">
            <div className="img-container">
                <img src={oneUser.picture} alt="" style={{ width: '80vw' }} />
            </div>
            <div className="title">
                <h2>{oneUser.username}</h2>
                <h3>{oneUser.age}</h3>
                {
                    user?._id === id && (
                        <Link to={`/edit`}><CreateIcon sx={{ color: 'black', fontSize: 30, marginLeft: '33vw' }}></CreateIcon></Link>
                    )
                }
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
                <div>
                    <IconButton><Link to="/"><ArrowBackIcon sx={{ color: '#f44e82' }} /></Link></IconButton>
                </div>
                <div>
                    {
                        user?._id === id && (
                            <p className="logout-btn" onClick={() => loginOut()}>Cerrar sesión</p>
                        )
                    }
                </div>

            </div>
        </div>

    )

}

export default Profile