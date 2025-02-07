import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,  // Espacement en bas
                marginTop: 10,  // Espacement en bas
                marginLeft: 'auto',  // Centrage horizontal
                marginRight: 'auto', // Centrage horizontal
            }}
        >
            <CircularProgress size={80} />
        </Box>
    );
};

export default Loading;