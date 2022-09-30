import TinderCard from 'react-tinder-card'
import { useState } from 'react';
import './TinderCard.css'


function Card({ user }) {

    // const [index, setIndex] = useState(0)
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction) => {
        setLastDirection(direction)
        // setIndex((currentState) => currentState + 1)
        // console.log(direction)
        if (direction === 'right') {
            console.log('like')
        } if (direction === 'left') {
            console.log('dislike')
        }
    }

    const outOfFrame = () => {
        console.log(user.username + ' left the screen!')
    }

    return (
        <>
            <TinderCard className='swipe' key={user.name} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                <div className='card' style={{ background: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*)` }}>
                    <h3 style={{ color: 'white' }}>{user.username}</h3>
                </div>
            </TinderCard>

            {lastDirection ? console.log({ lastDirection }) : null}
        </>
    )
}


export default Card