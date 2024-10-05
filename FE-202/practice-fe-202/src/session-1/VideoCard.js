import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = (props) =>{
    return(
        <Card>
            <CardMedia
             component="img"
             image={props.data.previewImage}
             height="140"
             alt={props.data.title}
            />
            <CardContent>
                <Typography color="text.secondary">{props.data.genre}</Typography>
                <Typography variant="h5">{props.data.title}</Typography>
                <Typography color="text.secondary">{props.data.releaseDate}</Typography>
            </CardContent>
        </Card>
    )
}
export default VideoCard;