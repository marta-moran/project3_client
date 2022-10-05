import { createContext, useState } from "react";

const MessageContext = createContext()

function MessageToast(props) {

    const [showMessage, setShowMessage] = useState({
        show: false,
        title: 'Título',
        text: 'Texto del mensaje'
    })

    return (
        <MessageContext.Provider value={{ setShowMessage, showMessage }}>
            {props.children}
        </MessageContext.Provider>
    )
}

export { MessageContext, MessageToast }

