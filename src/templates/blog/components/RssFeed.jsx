import {Search} from "./SearchBar";
import IconButton from "@mui/material/IconButton";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import Box from "@mui/material/Box";
import * as React from "react";

export function RssFeed() {
    return(
        <Box
            sx={{
                display: { xs: 'flex', sm: 'none' },
                flexDirection: 'row',
                gap: 1,
                width: { xs: '100%', md: 'fit-content' },
                overflow: 'auto',
            }}
        >
            <Search />
            <IconButton size="small" aria-label="RSS feed">
                <RssFeedRoundedIcon />
            </IconButton>
        </Box>
    );

}


