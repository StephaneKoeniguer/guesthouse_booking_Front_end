import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import UserAPI from "../../api/user";
import AppAppBar from "./components/AppAppBar";
import AppTheme from '../../shared-theme/AppTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';
import {FormCard, SignUpContainer} from "../../style/CardStyle";
import {Box, Button, Divider, FormLabel, FormControl, Link, Typography, CssBaseline, TextField} from '@mui/material';


export default function SignUp(props) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState(false);
    const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
    const navigate = useNavigate();

    /**
     * Contrôle des inputs
     * @returns {boolean}
     */
    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const firstName = document.getElementById('first_name');
        const lastName = document.getElementById('last_name');


        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Saisir une adresse email valide');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Le mot de passe doit fait plus de 6 caractères.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (!firstName.value || firstName.value.length < 1) {
            setFirstNameError(true);
            setFirstNameErrorMessage('Le nom est obligatoire');
            isValid = false;
        } else {
            setFirstNameError(false);
            setFirstNameErrorMessage('');
        }

        if (!lastName.value || lastName.value.length < 1) {
            setLastNameError(true);
            setLastNameErrorMessage('Le prénom est obligatoire');
            isValid = false;
        } else {
            setLastNameError(false);
            setLastNameErrorMessage('');
        }

        return isValid;
    };

    const registerUser = async (formData) => {
        try {
            // Conversion des données en JSON
            const data = {
                firstName: formData.get('first_name'),
                lastName: formData.get('last_name'),
                email: formData.get('email'),
                password: formData.get('password'),
            };

            // Appel à l'API
            await UserAPI.RegisterUser(data);
            // Naviguer avec un état pour indiquer le succès
            navigate('/', { state: { showPopup: true } });
        } catch (error) {
            console.error(
                error.message
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validation des champs
        if (firstNameError || emailError || passwordError) {
            return;
        }
        const formData = new FormData(event.currentTarget);
        // Appel à l'enregistrement utilisateur
        registerUser(formData);
    };


    return (
        <AppTheme {...props}>
            <AppAppBar />
            <CssBaseline enableColorScheme />
            <SignUpContainer direction="column" justifyContent="space-between">
                <FormCard variant="outlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Inscription
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="first_name">Nom</FormLabel>
                            <TextField
                                autoComplete="first_name"
                                name="first_name"
                                required
                                fullWidth
                                id="first_name"
                                placeholder="Snow"
                                error={firstNameError}
                                helperText={firstNameErrorMessage}
                                color={firstNameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last_name">Prénom</FormLabel>
                            <TextField
                                autoComplete="last_name"
                                name="last_name"
                                required
                                fullWidth
                                id="last_name"
                                placeholder="Jon"
                                error={lastNameError}
                                helperText={lastNameErrorMessage}
                                color={lastNameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="your@email.com"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                error={emailError}
                                helperText={emailErrorMessage}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Mot de passe</FormLabel>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                variant="outlined"
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                        >
                            S'inscrire
                        </Button>
                    </Box>
                    <Divider>
                        <Typography sx={{ color: 'text.secondary' }}>ou</Typography>
                    </Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            /*onClick={''}*/
                            startIcon={<GoogleIcon />}
                        >
                            S'inscrire avec Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            /*onClick={''}*/
                            startIcon={<FacebookIcon />}
                        >
                            S'inscrire avec Facebook
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Déja un compte ?{' '}
                            <Link
                                href="/connection"
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Se connecter
                            </Link>
                        </Typography>
                    </Box>
                </FormCard>
            </SignUpContainer>
        </AppTheme>
    );
}