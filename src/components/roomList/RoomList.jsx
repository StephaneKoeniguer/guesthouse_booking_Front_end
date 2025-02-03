import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Divider } from '@mui/material';

const RoomList = ({ rooms }) => {
    return (
        <Grid container spacing={4}>
            {rooms.map((room) => (
                <Grid item xs={12} sm={6} md={3} key={room.id}>
                    <Card
                        sx={{
                            width: '500px', // Largeur fixe
                            height: '400px', // Hauteur fixe
                            boxShadow: 4,
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column', // Pour que les enfants soient empilés
                            justifyContent: 'space-between', // Espacer le contenu
                            '&:hover': {
                                boxShadow: 6,
                            },
                            margin: '0 auto', // Centre la carte dans sa grille
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={room.name}
                            height="200" // Taille de l'image fixe
                            image={room.image || '/default-image.jpg'}
                            sx={{ objectFit: 'cover' }} // S'assure que l'image garde ses proportions
                        />
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                            }}
                        >
                            <Typography variant="h6">{room.name}</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '16px' }}>
                                {room.description}
                            </Typography>
                            <Divider />
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginTop: '16px' }}
                            >
                                Réserver
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default RoomList;