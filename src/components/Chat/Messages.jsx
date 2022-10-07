import { useEffect, useRef, useState } from "react"
import ScrollToBottom from "react-scroll-to-bottom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Messages({ socket, username, room, messageList }) {

    console.log(socket)

    const [currentMessage, setCurrentMessage] = useState("")
    const currentRef = useRef(null)

    const sendMessage = async () => {
        if (currentMessage !== "") {
            console.log(currentMessage)
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData)
            console.log(currentMessage)
            setCurrentMessage(""); //no funcionaaaaa
            console.log(currentMessage)
        }
    }

    useEffect(() => {
        currentRef?.current.scrollIntoView({ behavior: 'smooth' })
        console.log("PILLA LA REF??", currentRef)
    }, [currentMessage])


    console.log("data->", messageList)

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Chatea con tu match 💓️</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent, index) => {
                        return (
                            <div
                                className="message"
                                id={username === messageContent.author ? "you" : "other"} key={index}
                            >
                                <div className="message-content">
                                    <p>{messageContent.message}</p>
                                </div>
                                <div className="message-meta">
                                    <p id="time">{messageContent.time}</p>
                                    <p id="author">{messageContent.author}</p>
                                </div>
                            </div>
                        )
                    })}
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

            <Link to="/"><Button variant="dark" className="button"><ArrowBackIcon /></Button></Link>

            <div ref={currentRef}></div>
        </div>

    )
}

export default Messages