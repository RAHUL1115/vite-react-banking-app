import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5100",
});

export default function MultiActionAreaCard(props) {
    async function addToCart(id) {
        try {
            let res = await client.post('/cart',{
                "id": id,
                "quantity":5
            })
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            width="150"
            image={props.image}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Add to cart
            </Button>
        </CardActions>
        </Card>
    );
}