import { red } from '@mui/material/colors';

import ClearIcon from '@mui/icons-material/Clear';

import IconButton from '@mui/material/IconButton';


const LikeButton = () => {
    return (

        <IconButton sx={{ color: red[500] }} >
            <ClearIcon />
        </IconButton>


    );
}

export default LikeButton