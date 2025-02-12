import Typography from "@mui/material/Typography";
import * as React from "react";

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