import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client'
import { AuthContext } from '../../context/auth.context';
import userAxios from '../../services/userAxios';
import Messages from './Messages';
import MatchesList from "../../components/MatchesList/MatchesList"
import { Link, useParams } from 'react-router-dom';

function Chat() {

    const socket = io('http://localhost:5005')
    const { user } = useContext(AuthContext)
    const { id } = useParams()

    // socket.emit('join', { message: 'holita' });
    socket.on('new message', (socket) => {
        console.log(socket)
    })

    const [username, setUserName] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [messageList, setMessageList] = useState([])


    const joinRoom = () => {
        if (user) {
            console.log(username)
            socket.emit("join_room", id) //id
            setShowChat(true)
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log("sale?", data)
            setMessageList((list) => [...list, data])
        })
    }, [socket])

    return (
        <>
            <MatchesList></MatchesList>
            <button onClick={joinRoom}>Chatear</button>
            {/* <Link to={`/profile/${u._id}`}><h3>{u.username}</h3></Link> */}
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    <input
                        type="text"
                        placeholder="John..."
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                    />
                    {/* <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value);
                        }}
                    /> */}
                    {/* <button onClick={joinRoom}>Join A Room</button> */}
                </div>
            ) : (
                <Messages socket={socket} username={username} room={id} messageList={messageList} />
            )}
        </>
    )
}

export default Chat