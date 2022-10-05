import TinderCard from 'react-tinder-card'
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/auth.context'
import './TinderCard.css'
import userAxios from "../../../services/userAxios";
import LikeButton from '../../Buttons/LikeButton';
import DislikeButton from '../../Buttons/DislikeButton';
import Stack from '@mui/material/Stack';




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
            <TinderCard preventSwipe={["down", "up"]} className='swipe' key={oneUser._id} onSwipe={(dir) => swiped(dir, oneUser.username)}>
                <div className='card' style={{ background: `url(${oneUser.picture})` }}>
                    <h3 style={{ color: 'white' }}>{oneUser.username}</h3>
                </div>
            </TinderCard>

            < div className="likeButton" >
                <Stack direction="row" spacing={4} >

                    <DislikeButton />

                    <LikeButton />
                </Stack>
            </div >

            {lastDirection ? console.log({ lastDirection }) : null}
        </>
    )
}


export default Card