import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Confeti from '../Confeti/Confeti';
import './Modal.css'


function ModalMsg({ show, handleClose, oneUser }) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Confeti></Confeti>
                <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                    <Modal.Title style={{ color: 'white' }}>🔥️Match!🔥️</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>¡Has hecho match con <span>{oneUser}</span>!</p>
                    </div>

                </Modal.Body>
            </Modal>
        </>

    )
}

export default ModalMsg