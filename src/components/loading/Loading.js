import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100%',
            }}
        >
            <CircularProgress size={80} />
        </Box>
    );
};

export default Loading;