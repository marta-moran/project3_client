import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Confeti from '../Confeti/Confeti';

function ModalMsg({ show, handleClose }) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Confeti></Confeti>
                <Modal.Header closeButton>
                    <Modal.Title>Match!</Modal.Title>
                </Modal.Header>
                <Modal.Body>¡Has hecho Match!</Modal.Body>
            </Modal>
        </>

    )
}

export default ModalMsg