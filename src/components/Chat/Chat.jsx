import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client'
import { AuthContext } from '../../context/auth.context';
import userAxios from '../../services/userAxios';
import Messages from './Messages';
import { useParams } from 'react-router-dom';
import './Chat.css'

function Chat() {

    const socket = io('http://localhost:5005')
    const { user } = useContext(AuthContext)
    const { id } = useParams()

    socket.on('new message', (socket) => {
    })

    const [username, setUsername] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [messageList, setMessageList] = useState([])


    const joinRoom = () => {
        if (user) {
            socket.emit("join_room", id) //id
            setShowChat(true)
        }

        userAxios.viewMatches(id)
            .then((match) => {

                // console.log(match.matches[0].users)
                console.log(user);
                setUsername(user.username);
                // match.matches[0].users.map(element => {
                //     // console.log("USUARIO LOGEADO", user)
                //     console.log()
                //     if (element._id === user._id) {
                //         // // console.log("USER1", username)
                //         setUsername(element.username)
                //     }
                //     if (element._id !== user._id) {
                //         // console.log("entra? usuario q no es el emisor del mensaje")
                //         // console.log("USER2->", username)
                //         setUsername(element.username)

                //     }

                // })
            })
    }
    useEffect(() => {
        if (user) {

            socket.emit("join_room", id) //id
            setShowChat(true)
            setUsername(user.username);

            //         userAxios.viewMatches(id)
            //             .then((match) => {

            //                 // console.log(match.matches[0].users)
            //                 match.matches[0].users.forEach(element => {
            //                     if (element._id === user._id) {
            //                         // console.log(username)
            //                         setUsername(element.username)
            //                     }
            //                     if (element._id !== user._id) {
            //                         // console.log(username)
            //                         setUsername(element.username)

            //                     }

            //                 })
            //             })
        }

    }, [user])

    useEffect(() => {
        socket.on("receive_message", (data) => {
            // console.log("sale?", data)
            setMessageList((list) => [...list, data])
        })
    }, [socket])



    return (
        <div className='chatPage'>
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    {/* <button onClick={joinRoom}>Join A Room</button> */}
                </div>
            ) : (
                <Messages socket={socket} username={username} room={id} messageList={messageList} />
            )}
        </div>
    )
}

export default Chat