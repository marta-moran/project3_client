import TinderCard from 'react-tinder-card'
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/auth.context'
import './TinderCard.css'
import userAxios from "../../../services/userAxios";
import LikeButton from '../../Buttons/LikeButton';
import DislikeButton from '../../Buttons/LikeButton';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';



// import { useNavigate } from 'react-router-dom';

function Card({ oneUser }) {
    const { user } = useContext(AuthContext)

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction) => {
        setLastDirection(direction)
        console.log("like o dislike a", oneUser._id)
    }

    useEffect(() => {
        if (lastDirection === "right") {
            userAxios.like(oneUser._id, user)
                .then((user) => {
                    console.log(user)
                })
                .catch(error => console.log(error))

        }
    })


    return (
        <>
            <TinderCard className='swipe' key={user.username} onSwipe={(dir) => swiped(dir, user.username)} onCardLeftScreen={() => outOfFrame(user.username)}>
                <div className='card' style={{ background: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*)` }}>
                    <h3 style={{ color: 'white' }}>{user.username}: {user.age}</h3>
                </div>
            </TinderCard>
            <div className="likeButton">
                {/* <Stack direction="row" spacing={4} > */}
                <IconButton >
                    <LikeButton />
                </IconButton>
                <DislikeButton />
                {/* </Stack> */}
            </div>

            {lastDirection ? console.log({ lastDirection }) : null}
        </>
    )
}


export default Card