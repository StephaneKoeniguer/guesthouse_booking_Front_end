import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import {Search} from "./SearchBar";
import * as React from "react";
import {useEffect, useState} from "react";
import CategoryAPI from "../../../api/category";


export function Filter({handleClick}) {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Utiliser la fonction fetchCategories pour récupérer les données
        const getCategories = async () => {
            try {
                const categoryData = await CategoryAPI.fetchCategories();  // Appel de la méthode statique
                setCategories(categoryData);
            } catch (err) {
                setError(err.message);
            }
        };

        getCategories();
    }, []);

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                width: '100%',
                justifyContent: 'space-between',
                alignItems: { xs: 'start', md: 'center' },
                gap: 4,
                overflow: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    gap: 3,
                    overflow: 'auto',
                }}
            >
                <Chip
                    onClick={handleClick}
                    size="medium"
                    label="Toutes les catégories"
                />

                {categories.map((category) => (
                    <Chip
                        key={category.id}
                        onClick={handleClick}
                        size="medium"
                        label={category.name}
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />

                ))}

            </Box>
            <Box
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            >
                <Search />
            </Box>
        </Box>
    );
}