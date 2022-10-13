import TinderCard from 'react-tinder-card'
import { useState, useEffect } from 'react';
import './TinderCard.css'
import userAxios from "../../../services/userAxios";
import ModalMsg from '../../Modal/Modal';
import { Link } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';


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
                    // console.log(match)
                    if (match) {
                        setIsMatch(true)
                        // console.log(isMatch)
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

    return (
        <>
            <NavBar />
            <ModalMsg show={isMatch} handleClose={close} />

            <TinderCard preventSwipe={["down", "up"]} className='swipe' key={oneUser._id} onSwipe={(dir) => swiped(dir, oneUser.username)}>
                <div className='card' style={{ background: `url(${oneUser.picture})` }}>
                    <div className='title-card'>
                        <h2>{oneUser.username}</h2>
                        <p>{oneUser.age}</p>
                    </div>
                    {oneUser.description !== "" && (
                        <p>{oneUser.description}</p>
                    )}
                    <Link className="btn btn-dark mt-1" to={`/profile/${oneUser._id}`}>Ver perfil</Link>
                </div>
            </TinderCard>
        </>

    )
}


export default Card