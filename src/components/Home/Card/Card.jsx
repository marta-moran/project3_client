import TinderCard from 'react-tinder-card'
import { useState, useEffect } from 'react';
import './TinderCard.css'
import userAxios from "../../../services/userAxios";
import ModalMsg from '../../Modal/Modal';

function Card({ oneUser }) {
    const [lastDirection, setLastDirection] = useState()
    const [isMatch, setIsMatch] = useState(false)

    const swiped = (direction) => {
        setLastDirection(direction)
        console.log("ESTA ES LA DIRECCION SWIPEADA", direction)
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
                    console.log(match)
                    if (match) {
                        setIsMatch(true)
                        console.log(isMatch)
                    }
                })
                // .then(() => setIsMatch(false))
                .catch(error => console.log(error))
        }

        if (lastDirection === "left") {
            userAxios.dislike(oneUser._id)
                .then((user) => {
                    console.log(user)
                })
                .catch(error => console.log(error))
        }
    }, [lastDirection])

    useEffect(() => {
        console.log(isMatch)
    }, [isMatch])

    function close() {
        setIsMatch(false)
    }

    return (
        <>
            <ModalMsg show={isMatch} handleClose={close} />

            <TinderCard preventSwipe={["down", "up"]} className='swipe' key={oneUser._id} onSwipe={(dir) => swiped(dir, oneUser.username)}>
                <div className='card' style={{ background: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*)` }}>
                    <h3 style={{ color: 'white' }}>{oneUser.username}</h3>
                </div>
            </TinderCard>
        </>

    )
}


export default Card