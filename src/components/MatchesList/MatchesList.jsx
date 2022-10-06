import { useEffect, useState, useContext } from "react"
import userAxios from "../../services/userAxios"
import { AuthContext } from "../../context/auth.context"
import '../MatchesList/MatchesList.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const MatchesList = () => {

    const [match, setMatch] = useState({})
    const { user } = useContext(AuthContext)



    useEffect(() => {
        userAxios.viewMatches()
            .then((matches) => {
                setMatch(matches)
                console.log(matches)
            })
    }, [])

    console.log(match)

    return (
        <div>
            {
                match.matches?.map(match => {
                    return match.users.map((u) => {
                        if (u._id !== user._id) {
                            return (
                                <div className="matches" key={u._id}>
                                    <div>
                                        <ListGroup>
                                            <ListGroup.Item xs={10}>
                                                {/* <Link to={`/profile/${u._id}`}><h3>{u.username}</h3></Link> */}
                                                <Link to={`/chat/${match._id}`}><h3>{u.username}</h3></Link>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>

                                    <div>
                                        <img className="draw" src={u.picture} alt="profile-img"></img>
                                    </div>
                                </div>
                            )
                        }

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
        </div >
    )
}


export default MatchesList

