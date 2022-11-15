import TinderCard from 'react-tinder-card'
import { useState, useEffect } from 'react';
import './TinderCard.css'
import userAxios from "../../../services/userAxios";
import ModalMsg from '../../Modal/Modal';
import { Button } from 'react-bootstrap';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';



function Card({ oneUser }) {

    const [lastDirection, setLastDirection] = useState()
    const [isMatch, setIsMatch] = useState(false)

    const swiped = (direction) => {
        setLastDirection(direction)
    }


    const user2 = oneUser._id

    useEffect(() => {

        if (lastDirection === "right") {
            userAxios
                .like(oneUser._id)
                .then((updatedUser) => {
                    return updatedUser
                })
                .then(() => {
                    return userAxios.match({ user2 })
                })
                .then((match) => {
                    if (match) {
                        setIsMatch(true)
                    }
                })
                .catch(error => console.log(error))
        }

        if (lastDirection === "left") {
            userAxios.dislike(oneUser._id)
                .then((user) => {
                    // console.log(user)
                })
                .catch(error => console.log(error))
        }
    }, [lastDirection])

    useEffect(() => {
    }, [isMatch])

    function close() {
        setIsMatch(false)
    }

    function link(id) {
        window.location.href = "/profile/" + id
    }

    return (
        <>
            <ModalMsg show={isMatch} handleClose={close} oneUser={oneUser.username} oneUserPicture={oneUser.picture} />

            <TinderCard preventSwipe={["down", "up"]} className='swipe' key={oneUser._id} onSwipe={(dir) => swiped(dir, oneUser.username)}>
                <div className='card' style={{ background: `url(${oneUser.picture})` }}>
                    <div>
                        <div className='title-card'>
                            <h2>{oneUser.username}</h2>
                            <p>{oneUser.age}</p>

                        </div>
                        {oneUser.description !== "" && (
                            <p>{oneUser.description}</p>
                        )}
                    </div>


                    <Button variant="dark" onClick={() => { link(oneUser._id) }} onTouchEnd={() => { link(oneUser._id) }}>Ver perfil</Button>
                </div>
            </TinderCard>
        </>

    )
}




export default Card