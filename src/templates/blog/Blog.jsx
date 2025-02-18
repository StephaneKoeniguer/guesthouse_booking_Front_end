import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Popup} from "./components/PopUp";

export default function Blog(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(location.state?.showPopup ?? false);

    /**
     * Gestion du popup d'inscription
     */
    useEffect(() => {
        // Vérifier si l'état indique qu'un popup doit être affiché
        if (location.state?.showPopup) {
            setShowPopup(true);

            // Nettoyer l'état après utilisation pour éviter un déclenchement au rafraîchissement
            navigate(location.pathname, { replace: true });
        }
    }, [location.state, navigate]);

    const handleClose = () => {
        setShowPopup(false);
    };


    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Popup
                open={showPopup}
                onClose={handleClose}
                title="Compte créé avec succès"
                children="Vous pouvez à présent déposer une annonce "
            />
                <Container
                    maxWidth="l"
                    component="main"
                    sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
                >
                    <MainContent />
                    {/*<Latest />*/}
                </Container>
            <Footer />
        </AppTheme>
    );
}