import { red } from '@mui/material/colors';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

const DislikeButton = () => {
    return (
        <IconButton sx={{ color: red[500] }} >
            <ClearIcon sx={{ fontSize: 60 }} />
        </IconButton>
    );
}

export default DislikeButton