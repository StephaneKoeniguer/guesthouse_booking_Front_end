import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from '../../context/AuthProvider';
import UserAPI from "../../api/user";
import AppTheme from '../../shared-theme/AppTheme';
import ForgotPassword from './components/ForgotPassword';
import {GoogleIcon, FacebookIcon, SitemarkIcon} from './components/CustomIcons';
import AppAppBar from "./components/AppAppBar";
import {CardSignIn, SignInContainer} from "../../style/CardStyle";
import {Box, Button, Divider, FormLabel, FormControl, Link, Typography, Checkbox, CssBaseline, FormControlLabel, TextField} from '@mui/material';


export default function SignIn(props) {

    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Saisir un email valide');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Le mot de passe doit faire plus de 6 caractères');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    const connectUser = async (formData) => {
        try {
            // Conversion des données en JSON
            const data = {
                username: formData.get('email'),
                password: formData.get('password'),
            };

            // Appel à l'API
            const user = await UserAPI.ConnectUser(data);
            localStorage.setItem('authToken', user.token);
            login(user);  //
            navigate('/');
        } catch (error) {
            console.error(
                error.message
            );
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailError || passwordError) {
            return;
        }
        const data = new FormData(event.currentTarget);
        connectUser(data);
    };



    return (
        <AppTheme {...props}>
            <AppAppBar />
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <CardSignIn variant="outlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Se connecter
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Mot de passe</FormLabel>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Se souvenir de moi"
                        />
                        <ForgotPassword open={open} handleClose={handleClose} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                        >
                            Connexion
                        </Button>
                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpen}
                            variant="body2"
                            sx={{ alignSelf: 'center' }}
                        >
                            Mot de passe oublié ?
                        </Link>
                    </Box>
                    <Divider>ou</Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            /*onClick={}*/
                            startIcon={<GoogleIcon />}
                        >
                            Se connecter avec Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            /*onClick={}*/
                            startIcon={<FacebookIcon />}
                        >
                            Se connecter avec Facebook
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Pas de compte ?{' '}
                            <Link
                                href="/inscription"
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Créer un compte
                            </Link>
                        </Typography>
                    </Box>
                </CardSignIn>
            </SignInContainer>
        </AppTheme>
    );
}
