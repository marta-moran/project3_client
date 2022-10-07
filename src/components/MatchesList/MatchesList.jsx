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

            })

    }, [])
    console.log(match.matches)
    return (
        <div >
            {
                match.matches?.map(match => {
                    return match.users.map(u => {
                        if (u._id !== user._id) {
                            return (
                                <div className="matches" key={u._id}>
                                    <div >


                                        <ListGroup>
                                            <ListGroup.Item xs={10} variant="danger">

                                                <h3>{u.username}</h3>
                                            </ListGroup.Item>
                                        </ListGroup>

                                    </div>
                                    <div>
                                        <img className="draw" src={u.picture} ></img>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                )
            }

        </div >
    )
}

// Ofcanvas

export default MatchesList

