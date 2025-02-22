import * as React from 'react';
import {Link} from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider';
import SitemarkButton from "./SitemarkButton";
import Drawer from '@mui/material/Drawer';
import ColorModeIconDropdown from '../../../shared-theme/ColorModeIconDropdown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {StyledToolbar} from "../../../style/Navigation";
import {Box, AppBar, Button, IconButton, Container, Divider, MenuItem } from '@mui/material';


export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);
    const { isAuthenticated, logout, user } = useAuth();

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
                        <SitemarkButton />
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
                                <Button variant="text" color="info" size="small" component={Link}
                                        to="/dashboard">
                                    Tableau de bord
                                </Button>
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
                                    <>
                                        <MenuItem>
                                            <Button variant="text" color="info" fullWidth component={Link}
                                                    to="/">
                                                Tableau de bord
                                            </Button>
                                        </MenuItem>
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
                                    </>
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