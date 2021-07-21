import React from 'react';
import { Card, Container } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function FiltersList(){

    return(
        <Container  style={{ "width" : "20vw", "background-color" : "white", "min-width" : "280px" }}>
        <Card raised="true" style={{ "height" : "100%" }} >
                <CardActionArea >
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="/house.jpg" title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">$123,450.00</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Button size="small" color="primary"  >View Property</Button>
                    </Grid>
                </CardActions>
            </Card>
            </Container>
    );
}