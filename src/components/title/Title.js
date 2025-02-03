import React from 'react';
import { Typography } from '@mui/material';

const Title = ({ children}) => {
    return (
        <Typography
            variant="h2"
            sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '50px',
                marginBottom: '50px',
                fontFamily: 'Roboto',
            }}
        >
            {children}
        </Typography>
    );
};

export default Title;