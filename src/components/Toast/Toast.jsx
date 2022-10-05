import { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import { MessageContext } from '../../context/message.context'

function Message() {

    const { showMessage, setShowMessage } = useContext(MessageContext)
    return (
        <Toast
            show={showMessage.show}
            onClose={() => setShowMessage({ ...showMessage, show: false })}
            delay={3000}
            style={{ position: 'fixed', bottom: 30, fontFamily: 'monospace', fontSize: '20px' }}
            autohide
        >
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{showMessage.title}</strong>
            </Toast.Header>
            <Toast.Body>{showMessage.text}</Toast.Body>
        </Toast>
    );
}

export default Message