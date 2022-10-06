import { useContext } from "react"
import Chat from "../../components/Chat/Chat"
import { AuthContext } from "../../context/auth.context"

const ChatPage = () => {

    // const { user } = useContext(AuthContext)

    return (

        <Chat />
    )
}

export default ChatPage