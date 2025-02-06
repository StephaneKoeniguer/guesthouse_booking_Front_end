import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorDisplay = ({ error }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',  // Centrer sur l'écran verticalement
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: 3,  // Ombre pour rendre l'erreur plus visible
                    maxWidth: '80%',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Une erreur est survenue lors du chargement, veuillez réessayer plus tard
                </Typography>
            </Box>
        </Box>
    );
};

export default ErrorDisplay;