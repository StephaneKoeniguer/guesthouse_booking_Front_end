import {StyledTypography, SyledCard, SyledCardContent} from "../../../style/CardStyle";
import CardMedia from "@mui/material/CardMedia";
import {cardData} from "../../../data/Data";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import * as React from "react";
import {Author} from "./Author";


export function RoomListLarge({ handleFocus, handleBlur, focusedCardIndex }) {
    return (
        <>
            {cardData.slice(0, 2).map((card, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}> {/* Chaque carte occupe la moitié sur écrans moyens */}
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(index)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === index ? 'Mui-focused' : ''}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={card.title}
                            image={card.img}
                            sx={{
                                aspectRatio: '16 / 9',
                                borderBottom: '1px solid',
                                borderColor: 'divider',
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