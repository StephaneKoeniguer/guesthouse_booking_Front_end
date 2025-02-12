import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import {Title} from "./Title";
import {Filter} from "./Filter";
import {RoomListMedium} from "./RoomListMedium";
import Pagination from "@mui/material/Pagination";


export default function MainContent() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Title title="Nos maisons d'hôtes" description="Découvrez un cadre chaleureux et authentique où chaque séjour devient une expérience inoubliable." />
            <Filter handleClick={handleClick} />
            <Grid container spacing={2} columns={12}>
                <RoomListMedium
                    handleFocus={handleFocus}
                    focusedCardIndex={focusedCardIndex}
                />
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 4 }}>
                <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
            </Box>
        </Box>
    );
}