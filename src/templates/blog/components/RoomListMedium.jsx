import {StyledTypography, SyledCard, SyledCardContent} from "../../../style/CardStyle";
import CardMedia from "@mui/material/CardMedia";
import {cardData} from "../../../data/Data";
import Typography from "@mui/material/Typography";
import {Author} from "./Author";
import Grid from "@mui/material/Grid2";
import * as React from "react";


export function RoomListMedium({handleFocus, focusedCardIndex}) {
    return(
        <>
        {cardData.slice(2, 4).map((card, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}> {/* Chaque carte occupe 1/3 sur écrans moyens */}
                <SyledCard
                    variant="outlined"
                    onFocus={() => handleFocus}
                    onBlur={handleFocus}
                    tabIndex={0}
                    className={focusedCardIndex === index ? 'Mui-focused' : ''}
                    sx={{ height: '100%' }}
                >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={card.img}
                        sx={{
                            height: { sm: 'auto', md: '50%' },
                            aspectRatio: { sm: '16 / 9', md: '' },
                        }}
                    />
                    <SyledCardContent>
                        <Typography gutterBottom variant="caption" component="div">
                            {card.tag}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {card.title}
                        </Typography>
                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                            {card.description}
                        </StyledTypography>
                    </SyledCardContent>
                    <Author authors={card.authors} />
                </SyledCard>
            </Grid>
        ))}
    </>
    );
}