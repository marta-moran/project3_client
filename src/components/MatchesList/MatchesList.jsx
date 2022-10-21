import { useEffect, useState, useContext } from "react"
import userAxios from "../../services/userAxios"
import { AuthContext } from "../../context/auth.context"
import '../MatchesList/MatchesList.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

const MatchesList = () => {

    const [match, setMatch] = useState({})
    const { user } = useContext(AuthContext)
    // const [messages, setMessages] = useState()
    let hasUnreadMessages = false

    useEffect(() => {
        userAxios.viewMatches()
            .then((matches) => {
                setMatch(matches)
            })
    }, [])

    useEffect(() => {

    })


    return (
        <div>
            <h3 className="title-matches">Matches</h3>
            <div className="line"></div>
            {
                match.matches?.map(match => {
                    return match.users.map((u) => {
                        if (u._id !== user?._id) {
                            console.log(match.messages)
                            return (
                                <div className="matches" key={u._id}>
                                    <div className="icon-chat-perfil">
                                        <Link to={`/profile/${u._id}`}><Button variant="dark" className="view-profile">{u.username}</Button></Link>
                                        <Link to={`/chat/${match._id}`}><MarkChatUnreadIcon sx={{ fontSize: 35, color: '#f65858' }}></MarkChatUnreadIcon></Link>


                                        {/* {
                                            match.messages.length === 0 && (
                                                <Link to={`/chat/${match._id}`}><ChatBubbleOutlineIcon sx={{ fontSize: 35, color: 'black' }}></ChatBubbleOutlineIcon></Link>

                                            )
                                        } */}
                                    </div>
                                    <div>
                                        <img className="draw" src={u.picture} alt="profile-img"></img>
                                    </div>
                                </div>
                            )
                        }
                        return console.log("holaaa")
                    })
                }
                )
            }

            {
                match.matches?.length === 0 && (
                    <div className="no-matches">
                        <h2>Aún no tienes matches :(</h2>
                        <p>🔥️ Da likes y empieza a matchear 🔥️</p>
                    </div>

                )
            }
        </div>
    )
}


export default MatchesList

