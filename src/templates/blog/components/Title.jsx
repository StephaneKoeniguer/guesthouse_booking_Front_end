import Typography from "@mui/material/Typography";
import * as React from "react";

export function Title({ title, description}) {
    return (
        <div>
            <Typography variant="h1" gutterBottom>{title}</Typography>
            <Typography>{description}</Typography>
        </div>
    )
}