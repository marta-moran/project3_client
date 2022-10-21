import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client'
import { AuthContext } from '../../context/auth.context';
import userAxios from '../../services/userAxios';
import Messages from './Messages';
import { useParams } from 'react-router-dom';
import './Chat.css'

function Chat() {

    const URL = process.env.REACT_APP_BACK_END_URL

    const socket = io(URL)
    const { user } = useContext(AuthContext)
    const { id } = useParams()

    socket.on('new message', (socket) => {
    })

    const [username, setUsername] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [messageList, setMessageList] = useState([])
    const [msgList, setMsgList] = useState({})

    const joinRoom = () => {
        if (user) {
            socket.emit("join_room", id) //id
            setShowChat(true)
        }

        userAxios.viewMatches(id)
            .then((match) => {
                setUsername(user.username);
            })
    }

    useEffect(() => {
        if (user) {
            socket.emit("join_room", id) //id
            setShowChat(true)
            setUsername(user.username);
        }

    }, [user])

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket])

    useEffect(() => {

        userAxios.getMessages(id)
            .then(msg => {
                setMsgList(msg)
            })
            .catch(error => console.log(error))


    }, [])


    return (
        <div className='chatPage'>
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    {/* <button onClick={joinRoom}>Join A Room</button> */}
                </div>
            ) : (
                <Messages socket={socket} username={username} room={id} messageList={messageList} msgList={msgList} />
            )}
        </div>
    )
}

export default Chat