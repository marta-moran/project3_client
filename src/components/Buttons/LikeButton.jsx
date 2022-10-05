// import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { pink } from '@mui/material/colors';




const DislikeButton = () => {
    let prueba = () => {
        console.log('Hola, este click funciona')
    }

    return (

        <IconButton sx={{ color: pink[100] }}>
            <FavoriteBorderIcon sx={{ fontSize: 60 }} ></FavoriteBorderIcon>
        </IconButton>
    )
}

export default DislikeButton

