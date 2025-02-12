import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

export function Popup({ open, onClose, title, children, maxWidth = "sm", fullWidth = true }) {
    const handleConfirm = () => {
        onClose(); // Ferme le popup
    };

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose(); // Ferme le popup automatiquement après 5 secondes
            }, 5000);
            return () => clearTimeout(timer); // Nettoie le timer si le popup est fermé avant
        }
    }, [open, onClose]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
           >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm} color="primary">
                    Confirmer
                </Button>
            </DialogActions>
        </Dialog>
    );
}