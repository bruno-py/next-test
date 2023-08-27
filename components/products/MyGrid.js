import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function MyGrid({children}) {
    return (
        <Box sx={{flexGrow: 1, m: 2}}>
            <Grid container spacing={2}>
                <Grid xs="auto">
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}