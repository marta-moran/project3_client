import { useState } from "react"

function Messages({ socket, username, room, messageList }) {

    console.log(socket)

    const [currentMessage, setCurrentMessage] = useState("")

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
        }
    }


    console.log("data->", messageList)

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body"></div>
            {messageList.map((messageContent) => {
                console.log("sale?????", messageContent.message)
                return <h2>{messageContent.message}</h2>
            })}
            <div className="message-content">
                {/* <p>{messageContent.message}</p> */}
            </div>
            <div className="message-meta">
                {/* <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p> */}
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="hey..." onChange={(event) => {
                    setCurrentMessage(event.target.value)
                }} />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>

    )
}

export default Messages