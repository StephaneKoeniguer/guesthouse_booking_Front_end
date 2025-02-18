import * as React from "react";
import RoomsAPI from "../../../api/rooms";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";
import Pagination from "@mui/material/Pagination";
import {StyledTypography, SyledCard, SyledCardContent} from "../../../style/CardStyle";
import {CardMedia, Typography, Chip, Divider, Button, Rating,Box } from "@mui/material";
import Grid from "@mui/material/Grid2";



export function RoomListMedium({selectedCategory}) {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [averageRating, setAverageRating] = useState(0);
    const [page, setPage] = useState(1);
    const [limit] = useState(12);
    const [totalPages, setTotalPages] = useState(1);


    const getRooms = async () => {
        try {
            // Utiliser la fonction fetchRooms pour récupérer les données
            const data = await RoomsAPI.fetchRooms(page, limit);
            setRooms(data.rooms);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    /**
     * Gestion des rooms avec pagination
     */
    useEffect(() => {
        getRooms();

    }, [page, limit]);

    /**
     * Gestion des filtres avec pagination
     */
    useEffect(() => {
        const roomsToDisplay = async () => {
            setLoading(true); // Démarre le chargement au début
            setPage(1);

            if (selectedCategory) {
                // Si une catégorie est sélectionnée
                try {
                    const data = await RoomsAPI.fetchRoomsPerCategory(selectedCategory, page, limit);
                    setRooms(data.rooms);
                    setTotalPages(data.totalPages);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            } else {
                getRooms();
            }
        };

        roomsToDisplay();

    }, [selectedCategory, page, limit]);


    /**
     * Gestion pagination
     * @param event
     * @param value
     */
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    /**
     * Gestion des notes
     */
    useEffect(() => {
        // Vérifie si `rooms` contient des chambres et si elles ont des évaluations
        const newAverageRatings = rooms.map(room => {
            if (room?.reviews && room.reviews.length > 0) {
                const totalRating = room.reviews.reduce((acc, review) => acc + review.rating, 0);
                return totalRating / room.reviews.length;
            }
            return 0;
        });
        setAverageRating(newAverageRatings);
    }, [rooms]);

    return (
        <>
            {error && <ErrorDisplay error={error}/>} {/* Affiche l'erreur si elle existe */}

            {loading && !error && <Loading/>} {/* Affiche le spinner de chargement uniquement si pas d'erreur */}

            {!loading && !error && (
                <>
                    {rooms.map((room, index) => (
                        <Grid size={{xs: 12, md: 2}} key={room.id}>
                            {/* Chaque carte occupe 1/3 sur écrans moyens */}
                            <SyledCard
                                variant="outlined"
                                tabIndex={0}
                                sx={{height: '100%'}}
                            >
                                <CardMedia
                                    component="img"
                                    alt={room.name}
                                    image={room.roomImages[0].imageUrl}
                                    sx={{
                                        height: {sm: 'auto', md: '50%'},
                                        aspectRatio: {sm: '16 / 9', md: ''},
                                    }}
                                />
                                <SyledCardContent>
                                    <Typography gutterBottom variant="caption" component="div">
                                        <Chip label={room.category.name}/>
                                    </Typography>
                                    <Divider/>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {room.name}
                                    </Typography>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {room.description}
                                    </StyledTypography>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        <span style={{fontWeight: 'bold'}}>Capacité d'accueil :</span>{' '}
                                        {room.capacity > 1
                                            ? `${room.capacity} personnes`
                                            : `${room.capacity} personne`}
                                        <br/>
                                        <span style={{fontWeight: 'bold'}}>Tarif :</span> {room.pricePerNight} €
                                    </StyledTypography>
                                    <Divider/>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            marginTop: 2,
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            component={Link}
                                            to={`/rooms/${room.id}`}>
                                            En savoir plus
                                        </Button>
                                        <Rating
                                            key={room.id}
                                            name="read-only"
                                            value={averageRating[index] || 0}
                                            readOnly
                                            sx={{marginLeft: 'auto'}}
                                        />
                                    </StyledTypography>
                                </SyledCardContent>
                            </SyledCard>
                        </Grid>
                    ))}

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            pt: 4,
                        }}
                    >
                        <Pagination
                            hidePrevButton={page === 1}
                            hideNextButton={page === totalPages}
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                        />
                    </Box>
                </>
            )}
        </>
    );
}