import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import {Title} from "./Title";
import {Filter} from "./Filter";
import {RoomListMedium} from "./RoomListMedium";
import {useState} from "react";


export default function MainContent() {
    const [selectedCategory, setSelectedCategory] = useState(null); // Gère la catégorie sélectionnée

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Met à jour la catégorie sélectionnée
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Title title="Nos maisons d'hôtes" description="Découvrez un cadre chaleureux et authentique où chaque séjour devient une expérience inoubliable." />
            <Filter handleClick={handleCategoryChange} activeCategory={selectedCategory} />
            <Grid container spacing={2} columns={12}>
                <RoomListMedium selectedCategory={selectedCategory} />
            </Grid>
        </Box>
    );
}