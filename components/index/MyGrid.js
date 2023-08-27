import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MyCard from "./MyCard";

export default function MyGrid({products}) {
    return (
        <Box sx={{flexGrow: 1, m: 2}}>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid xs="auto">
                        <MyCard key={product.id} product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}