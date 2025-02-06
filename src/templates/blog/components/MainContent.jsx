import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import {Title} from "./Title";
import {Filter} from "./Filter";
import {RoomListLarge} from "./RoomListLarge";
import {RoomListMedium} from "./RoomListMedium";
import {RoomListSmall} from "./RoomListSmall";
import ErrorDisplay from "./ErrorDisplay";
import {useEffect, useState} from "react";
import Loading from "./Loading";
import RoomsAPI from "../../../api/rooms";


export default function MainContent() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [rooms, setRooms] = useState([]);
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

    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Title title="Nos maisons d'hôtes" description="Découvrez un cadre chaleureux et authentique où chaque séjour devient une expérience inoubliable." />
            <Filter handleClick={handleClick} />
            <Grid container spacing={2} columns={12}>
                <RoomListLarge
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    focusedCardIndex={focusedCardIndex}
                />
                <RoomListMedium
                    handleFocus={handleFocus}
                    focusedCardIndex={focusedCardIndex}
                />
                <RoomListSmall
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    focusedCardIndex={focusedCardIndex}
                />
            </Grid>
        </Box>
    );
}