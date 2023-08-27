import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActions} from "@mui/material";
import Link from "next/link"

export default function MyCard({product}) {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="product image"
                height="345"
                image={product.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gs. {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/products/${product.id}`}>Ver más</Link>
            </CardActions>
        </Card>
    )
}