import * as React from "react";
import CategoryAPI from "../../../api/category";
import {Search} from "./SearchBar";
import {useEffect, useState} from "react";
import {Box,Chip } from "@mui/material";


export function Filter({handleClick, activeCategory}) {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Utiliser la fonction fetchCategories pour récupérer les données
        const getCategories = async () => {
            try {
                const categoryData = await CategoryAPI.fetchCategories();
                setCategories(categoryData);
            } catch (err) {
                setError(err.message);
            }
        };

        getCategories();
    }, []);


    return(
        categories ? (
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
                        onClick={() => handleClick(null)}
                        size="medium"
                        label="Toutes les catégories"
                        sx={{
                            backgroundColor: activeCategory === null ? '#e3f2fd' : 'none',
                            border: activeCategory === null ? '1px solid #1976d2' : 'none',
                        }}
                    />

                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            onClick={() => handleClick(category.id)}
                            size="medium"
                            label={category.name}
                            sx={{
                                backgroundColor: activeCategory === category.id ? '#e3f2fd' : 'none',
                                border: activeCategory === category.id ? '1px solid #1976d2' : 'none',
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
        ) : null
    );

}