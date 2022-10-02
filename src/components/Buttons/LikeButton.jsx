import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ClearIcon from '@mui/icons-material/Clear';

function LikeButton() {
    return (
        <Stack direction="row" spacing={4} >
            <IconButton size='large' sx={{ color: red[500] }} >
                <ClearIcon sx={{ fontSize: 65 }} />
            </IconButton>
            <IconButton sx={{ color: pink[100] }}>
                <FavoriteBorderIcon sx={{ fontSize: 60 }} />
            </IconButton>
        </Stack>
    );
}

export default LikeButton