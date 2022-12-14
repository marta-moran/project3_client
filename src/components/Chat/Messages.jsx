import { useState } from "react"
import ScrollToBottom from "react-scroll-to-bottom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import userAxios from '../../services/userAxios';



function Messages({ socket, username, room, messageList, msgList }) {

    const [currentMessage, setCurrentMessage] = useState("")

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData)
            // console.log(currentMessage)
            setCurrentMessage(""); //no funcionaaaaa
            // console.log(currentMessage)

            userAxios.saveMessages(room, messageData)
                .then(message => console.log(message))
                .catch(error => console.log(error))

        }

    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Chatea con tu match 💓️</p>
                <Link to="/"><Button variant="dark" className="button"><ArrowBackIcon sx={{ color: 'black' }} /></Button></Link>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {
                        msgList?.messages?.map((msg, index) => {
                            console.log("msg---------->", username, msg.author)
                            return (
                                <div
                                    className="message"
                                    id={username === msg.author ? "you" : "other"} key={index}
                                >
                                    <div className="flex-messages">
                                        <div className="message-content">
                                            <p>{msg.text}</p>
                                        </div>
                                        <div className="message-meta">
                                            <p id="time">{msg.time}</p>
                                            <p id="author">{msg.author}</p>
                                        </div>
                                    </div>

                                </div>
                            )

                        })
                    }
                    {
                        messageList.map((messageContent, index) => {
                            return (
                                <div
                                    className="message"
                                    id={username === messageContent.author ? "you" : "other"} key={index}
                                >
                                    <div className="flex-messages">
                                        <div className="message-content">
                                            <p>{messageContent.message}</p>
                                        </div>
                                        <div className="message-meta">
                                            <p id="time">{messageContent.time}</p>
                                            <p id="author">{messageContent.author}</p>
                                        </div>
                                    </div>

                                </div>
                            )

                        })
                    }

                </ScrollToBottom>
            </div>

            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="hey..."
                    value={currentMessage}
                    onChange={(event) => {
                        setCurrentMessage(event.target.value)

                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}

                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>

    )
}

export default Messages