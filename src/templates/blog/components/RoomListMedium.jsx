import {StyledTypography, SyledCard, SyledCardContent} from "../../../style/CardStyle";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import * as React from "react";
import {useEffect, useState} from "react";
import RoomsAPI from "../../../api/rooms";
import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";
import Chip from "@mui/material/Chip";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";


export function RoomListMedium({handleFocus, focusedCardIndex}) {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        // Utiliser la fonction fetchRooms pour récupérer les données
        const getRooms = async () => {
            try {
                const roomsData = await RoomsAPI.fetchRooms();  // Appel de la méthode statique
                setRooms(roomsData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getRooms();

    }, []);

    useEffect(() => {
        // Vérifie si `rooms` contient des chambres et si elles ont des évaluations
        const newAverageRatings = rooms.map(room => {
            if (room?.reviews && room.reviews.length > 0) {
                const totalRating = room.reviews.reduce((acc, review) => acc + review.rating, 0);
                return totalRating / room.reviews.length;
            }
            return 0;  // Si la chambre n'a pas d'évaluations, on retourne 0
        });
        setAverageRating(newAverageRatings);
    }, [rooms]);


    return(
        <>
        {error && <ErrorDisplay error={error} />}  {/* Affiche l'erreur si elle existe */}
        {loading && <Loading />}  {/* Affiche le spinner loading */}

        {rooms.map((room, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={room.id}> {/* Chaque carte occupe 1/3 sur écrans moyens */}
                <SyledCard
                    variant="outlined"
                    onFocus={() => handleFocus}
                    onBlur={handleFocus}
                    tabIndex={0}
                    className={focusedCardIndex === room.id ? 'Mui-focused' : ''}
                    sx={{ height: '100%' }}
                >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={room.roomImages[0].imageUrl}
                        sx={{
                            height: { sm: 'auto', md: '50%' },
                            aspectRatio: { sm: '16 / 9', md: '' },
                        }}
                    />
                    <SyledCardContent>
                        <Typography gutterBottom variant="caption" component="div">
                            <Chip label={room.category.name} />
                        </Typography>
                        <Divider />
                        <Typography gutterBottom variant="h6" component="div">
                            {room.name}
                        </Typography>
                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                            {room.description}
                        </StyledTypography>
                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                            <span style={{ fontWeight: 'bold' }}>Capacité d'accueil :</span> {room.capacity > 1 ? `${room.capacity} personnes` : `${room.capacity} personne`}
                            <br />
                            <span style={{ fontWeight: 'bold' }}>Tarif :</span> {room.pricePerNight} €
                        </StyledTypography>
                        <Divider />
                        <StyledTypography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginTop: 2,
                            }}>
                            <Button variant="contained" size="medium">
                                En savoir plus
                            </Button>
                                <Rating key={room.id} name="read-only" value= {averageRating[index] || 0} readOnly sx={{ marginLeft: 'auto' }} />
                        </StyledTypography>
                    </SyledCardContent>
                    {/*<Author authors={room.capacity} />*/}
                </SyledCard>
            </Grid>
        ))}
    </>
    );
}