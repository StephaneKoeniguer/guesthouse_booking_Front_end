import * as React from 'react';
import { useLocation } from 'react-router-dom';
import RoomsAPI from "../../../api/rooms";
import AppTheme from '../../../shared-theme/AppTheme';
import AppAppBar from './AppAppBar';
import Footer from './Footer';
import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material/Grid2";
import {Typography, Box, Container, CardMedia, Divider, Rating, Chip} from "@mui/material";


export default function RoomDetails(props) {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const roomRating = location.state?.rating || 0;

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const data = await RoomsAPI.fetchDetailsRooms(id);
                setRoom(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRoomDetails();
    }, []);


    console.log(room);

    if (loading) {
        return (
            <AppTheme>
                <CssBaseline />
                <AppAppBar />
                <Container
                    maxWidth="lg"
                    component="main"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}
                >
                    <Loading />
                </Container>
                <Footer />
            </AppTheme>
        );
    }

    if (error) {
        return (
            <AppTheme>
                <CssBaseline />
                <AppAppBar />
                <Container maxWidth="lg" component="main" sx={{ my: 16 }}>
                    <ErrorDisplay />
                </Container>
                <Footer />
            </AppTheme>
        );
    }


    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
                maxWidth="xl"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <Box sx={{my: 4}}>
                    <Typography gutterBottom variant="caption" component="div">
                        <Chip label={room.category.name} color= 'warning' sx={{ padding: '5px' }}/>
                    </Typography>
                    <Typography variant="h4" component="h1" gutterBottom sx={{mt: 4}}>
                        {room.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                        {room.description}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Adresse : {room.adress} - {room.zipdCode} {room.city}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="body1">
                            <strong>Capacité d'accueil : </strong>
                            {room.capacity > 1
                                ? `${room.capacity} personnes`
                                : `${room.capacity} personne`}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Tarif : </strong>
                            {room.pricePerNight} €
                        </Typography>
                    </Box>
                    <Box sx={{my: 4}}>
                        <Divider />
                        <h2>Équipements</h2>
                        {room.amenities.map((amenitie) => (
                            <Chip
                                key={amenitie.id}
                                label={amenitie.name}
                                sx={{ marginX: '5px' }}
                                color="primary"
                            />
                        ))}
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ my: 2 }}>
                    <h2>Galerie</h2>
                    <Grid container spacing={2}>
                        {room.roomImages.map((roomImage, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CardMedia
                                    component="img"
                                    alt={`${room.name} - Image ${index + 1}`}
                                    image={roomImage.imageUrl}
                                    sx={{
                                        width: "100%",
                                        height: 200,
                                        objectFit: "cover",
                                        borderRadius: 2,
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Divider />
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', my: 2}}>
                    <h2>Commentaires</h2>
                    <Rating
                        name="read-only"
                        value={roomRating}
                        readOnly
                    />
                </Box>
                <Box>
                    {room.reviews.map((review, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: '1px solid #ddd',
                                borderRadius: 2,
                                padding: 2,
                                mb: 2,
                                backgroundColor: 'background.paper',
                                boxShadow: 2
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                {review.comment}
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                                    {review.user.firstName} {review.user.lastName}
                                </Typography>
                                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                                    {new Date(review.createdAt).toLocaleDateString()}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Container>
            <Footer />
        </AppTheme>
    );
}