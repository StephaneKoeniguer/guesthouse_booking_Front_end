import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SitemarkIcon from './SitemarkIcon';

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {'Copyright © '}
            <Link color="text.secondary" href="/">
                GuestHouse
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>
            <Divider
                sx={{
                    marginLeft: '20px',
                    marginRight: '20px',
                }}/>
            <Container
                maxWidth="l"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            minWidth: { xs: '100%', sm: '60%' },
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                            <SitemarkIcon />
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ fontWeight: 600, mt: 2 }}
                            >
                                S'inscrire à la newsletter
                            </Typography>
                            <InputLabel htmlFor="email-newsletter">Email</InputLabel>
                            <Stack direction="row" spacing={1} useFlexGap>
                                <TextField
                                    id="email-newsletter"
                                    hiddenLabel
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    aria-label="Enter your email address"
                                    placeholder="Adresse email"
                                    slotProps={{
                                        htmlInput: {
                                            autoComplete: 'off',
                                            'aria-label': 'Enter your email address',
                                        },
                                    }}
                                    sx={{ width: '250px' }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    sx={{ flexShrink: 0 }}
                                >
                                    S'inscrire
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            Menu
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="/">
                            Home
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            FAQ
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            Blog
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            Company
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="#">
                            About us
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            Legal
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="#">
                            Mentions légales
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            Contact
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}