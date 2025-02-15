import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorDisplay = ({ error }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40%',  // Réduire la largeur du conteneur
                padding: 2,  // Un peu de padding autour du message d'erreur
                boxSizing: 'border-box',
                backgroundColor: '#f44336',  // Couleur de fond rouge plus intense
                border: '1px solid #e57373',  // Bordure pour faire ressortir l'erreur
                borderRadius: '5px',  // Bords arrondis
                marginBottom: 5,  // Espacement en bas
                marginTop: 5,  // Espacement en bas
                marginLeft: 'auto',  // Centrage horizontal
                marginRight: 'auto', // Centrage horizontal
            }}
        >
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold' }}>
                Une erreur est survenue lors du chargement, veuillez réessayer plus tard
            </Typography>
        </Box>
    );
};

export default ErrorDisplay;