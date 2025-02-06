import Box from "@mui/material/Box";
import {StyledTypography, SyledCard, SyledCardContent} from "../../../style/CardStyle";
import Typography from "@mui/material/Typography";
import {cardData} from "../../../data/Data";
import {Author} from "./Author";
import Grid from "@mui/material/Grid2";
import * as React from "react";


export function RoomListSmall({handleFocus, handleBlur, focusedCardIndex}) {
    return (
        <Grid size={{ xs: 12, md: 4 }}>
            <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}
            >
                {cardData.slice(4, 6).map((card, index) => (
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(index)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === index ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                        key={index}
                    >
                        <SyledCardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                            }}
                        >
                            <div>
                                <Typography gutterBottom variant="caption" component="div">
                                    {card.tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {card.title}
                                </Typography>
                                <StyledTypography
                                    variant="body2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {card.description}
                                </StyledTypography>
                            </div>
                        </SyledCardContent>
                        <Author authors={card.authors} />
                    </SyledCard>
                ))}
            </Box>
        </Grid>

    );
}