import React, {useState} from 'react';
import {Box, Modal, TextField, Button, Rating} from '@mui/material';

export const ModalCommentaires = ({ open, handleClose }) => {

    const [value, setValue] = useState(0);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1000,
                    height: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <h2 id="modal-title">Ajouter un commentaire</h2>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        multiline
                        size= 'large'
                        InputProps={{
                            sx: {
                                alignItems: 'flex-start', // Aligne le texte au début
                                maxHeight: '250px', // Limite la hauteur maximale
                                overflow: 'auto', // Active le défilement si nécessaire
                            },
                        }}
                        sx={{
                            marginBottom: 2,
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Rating
                                value={value}
                                onChange={(event, value) => {
                                    setValue(value);
                                }}
                            />
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClose}
                                sx={{ marginRight: '15px' }}
                            >
                                Annuler
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleClose}
                            >
                                Enregistrer
                            </Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Modal>
    );
};
