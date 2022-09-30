import TinderCard from 'react-tinder-card'
import { useState } from 'react';
import './TinderCard.css'

function Card({ user }) {

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction) => {
        setLastDirection(direction)
        if (direction === 'right') {
            console.log("HAS DADO A LIKE A -->", user._id)
        } if (direction === 'left') {
            console.log("HAS DADO DISLIKE-->", user._id)
        }
    }

    const outOfFrame = () => {
        // console.log(user.username + ' left the screen!')
    }

    return (
        <>
            <TinderCard className='swipe' key={user.username} onSwipe={(dir) => swiped(dir, user.username)} onCardLeftScreen={() => outOfFrame(user.username)}>
                <div className='card' style={{ background: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*)` }}>
                    <h3 style={{ color: 'white' }}>{user.username}</h3>
                </div>
            </TinderCard>

            {lastDirection ? console.log({ lastDirection }) : null}
        </>
    )
}


export default Card