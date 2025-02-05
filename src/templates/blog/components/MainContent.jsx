import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import {Title} from "./Title";
import {Filter} from "./Filter";
import {cardData} from "../../../data/Data";
import {SyledCard} from "../../../style/CardStyle"
import {SyledCardContent} from "../../../style/CardStyle"
import {StyledTypography} from "../../../style/CardStyle"

function Author({ authors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                        <Avatar
                            key={index}
                            alt={author.name}
                            src={author.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    ))}
                </AvatarGroup>
                <Typography variant="caption">
                    {authors.map((author) => author.name).join(', ')}
                </Typography>
            </Box>
            <Typography variant="caption">July 14, 2021</Typography>
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};


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

                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(0)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[0].img}
                            sx={{
                                aspectRatio: '16 / 9',
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[0].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[0].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[0].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[0].authors} />
                    </SyledCard>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(1)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[1].img}
                            aspect-ratio="16 / 9"
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[1].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[1].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[1].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[1].authors} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(2)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[2].img}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[2].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[2].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[2].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[2].authors} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}
                    >
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(3)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 3 ? 'Mui-focused' : ''}
                            sx={{ height: '100%' }}
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
                                        {cardData[3].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[3].title}
                                    </Typography>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {cardData[3].description}
                                    </StyledTypography>
                                </div>
                            </SyledCardContent>
                            <Author authors={cardData[3].authors} />
                        </SyledCard>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(4)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 4 ? 'Mui-focused' : ''}
                            sx={{ height: '100%' }}
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
                                        {cardData[4].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[4].title}
                                    </Typography>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {cardData[4].description}
                                    </StyledTypography>
                                </div>
                            </SyledCardContent>
                            <Author authors={cardData[4].authors} />
                        </SyledCard>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(5)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[5].img}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[5].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[5].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[5].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[5].authors} />
                    </SyledCard>
                </Grid>
            </Grid>
        </Box>
    );
}