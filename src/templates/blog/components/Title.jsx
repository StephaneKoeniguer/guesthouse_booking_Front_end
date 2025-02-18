import * as React from "react";
import Typography from "@mui/material/Typography";

export function Title({ title, description}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h1" gutterBottom>{title}</Typography>
            <Typography>{description}</Typography>
        </div>
    )
}