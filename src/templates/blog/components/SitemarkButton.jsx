import React from 'react';
import { Button } from '@mui/material';
import SitemarkIcon from './SitemarkIcon';


export default function SitemarkButton() {
    return (
        <Button
            onClick={() => (window.location.href = '/')}
            sx={{
                padding: 0,
                minWidth: 'auto',
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <SitemarkIcon />
        </Button>
    );
}