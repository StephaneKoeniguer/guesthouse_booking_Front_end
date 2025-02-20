import * as React from 'react';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import {List,ListItem, ListItemButton, Stack, ListItemIcon, ListItemText } from '@mui/material/';

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon />, link: '/' },
    { text: 'Analytics', icon: <AnalyticsRoundedIcon />, link: "/" },
];


export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={index === 1}
                            component={Link}
                            to={item.link}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}