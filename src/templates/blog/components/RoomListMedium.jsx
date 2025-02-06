import {StyledTypography, SyledCard, SyledCardContent} from "../../../style/CardStyle";
import CardMedia from "@mui/material/CardMedia";
import {cardData} from "../../../data/Data";
import Typography from "@mui/material/Typography";
import {Author} from "./Author";
import Grid from "@mui/material/Grid2";
import * as React from "react";
import {useEffect, useState} from "react";
import RoomsAPI from "../../../api/rooms";
import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";


export function RoomListMedium({handleFocus, focusedCardIndex}) {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    console.log(rooms);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }


    return(
        <>
        {rooms.map((room) => (
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
                            {room.category.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {room.name}
                        </Typography>
                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                            {room.description}
                        </StyledTypography>
                    </SyledCardContent>
                    {/*<Author authors={room.capacity} />*/}
                </SyledCard>
            </Grid>
        ))}
    </>
    );
}