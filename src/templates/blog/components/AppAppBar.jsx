import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../../shared-theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';
import { Link} from 'react-router-dom'
import {StyledToolbar} from "../../../style/Navigation";
import { useAuth } from '../../../context/AuthProvider';

export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);
    const { isAuthenticated, logout } = useAuth();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <Sitemark />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" color="info" size="small" component={Link}
                                    to="/">
                                Home
                            </Button>
                            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                Blog
                            </Button>
                            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                Faq
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        {isAuthenticated ? (
                            <>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    onClick={logout}
                                >
                                    Déconnexion
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button color="primary" variant="text" size="small" component={Link} to="/inscription">
                                    S'inscrire
                                </Button>
                                <Button color="primary" variant="contained" size="small" fullWidth component={Link} to="/connection">
                                    Connexion
                                </Button>
                            </>
                        )}
                        <ColorModeIconDropdown />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuItem component={Link} to="/">Home</MenuItem>
                                <MenuItem>Blog</MenuItem>
                                <MenuItem>Faq</MenuItem>
                                <Divider sx={{ my: 3 }} />

                                {isAuthenticated ? (
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            fullWidth
                                            onClick={logout}
                                        >
                                            Déconnexion
                                        </Button>
                                    </MenuItem>
                                ) : (
                                    <>
                                        <MenuItem>
                                            <Button color="primary" variant="contained" fullWidth component={Link} to="/inscription">
                                                S'inscrire
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button color="primary" variant="outlined" fullWidth component={Link} to="/connection">
                                                Connexion
                                            </Button>
                                        </MenuItem>
                                    </>
                                )}
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}