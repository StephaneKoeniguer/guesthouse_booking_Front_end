import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export function Navbar() {

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h1" sx={{ flexGrow: 1, fontSize: 25 }}>
                    Guest House
                </Typography>
                <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="inherit" component={Link} to="/">
                        Accueil
                    </Button>
                    <Button color="inherit" component={Link} to="/house">
                        Chambre d'hôte
                    </Button>
                    <Button color="inherit" component={Link} to="/">
                        Connexion
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );

}
