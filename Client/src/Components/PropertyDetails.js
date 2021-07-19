import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Grow from '@material-ui/core/Grow';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  imageStyle: {
    minWidth: 280,
    maxWidth: 1070,
    width: "100%",
    height: "70vh",
    marginRight: "25px",
    marginLeft: "25px",
    marginTop: "10px",
    marginBottom: "10px"
  },
  detailsStyle: {
    maxWidth: 345,
    overflow: "auto",
    maxHeight: "70vh",
    marginRight: "25px",
    marginLeft: "25px",
    marginTop: "10px",
    marginBottom: "10px"
  }
});

export default function PropertyDetails() {
  const classes = useStyles();

  const handleRedirect = (id) => {
    window.location.replace("https://www.google.fr/");
};

  return (
    
      <Box display="flex" flexWrap="wrap" justifyContent="center" >
        <Grow in={true}>
          <CardMedia className={classes.imageStyle} component="img" alt="Contemplative Reptile" width="100%" height="auto" image="/house.jpg" title="Contemplative Reptile" />
        </Grow>
        <Grow in={true}>
            <Card raised="true" className={classes.detailsStyle}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">Price: $123,450.00</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Date: 19/07/2021</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Habitable Area: 120m²</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Land Surface: 250m²</Typography>
                        <Typography gutterBottom variant="h6" component="h6">ZIP Code: 1234</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Delegation: Hammamet</Typography>
                        <Typography gutterBottom variant="h6" component="h6">localite: n/a</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Address: 45 rue salah ben youssef hammamet</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Year Built: 2011</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Number Of Pieces: 2</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Type: Commercial</Typography>
                        <Typography gutterBottom variant="h6" component="h6">fonds: n/a</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Outdoors: Yes/No</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Baths: 2</Typography>
                        <Typography gutterBottom variant="h6" component="h6">constructible: n/a</Typography>
                        <Typography gutterBottom variant="h6" component="h6">service: n/a</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Heating/Air-Conditioning: Yes/Yes</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Kitchen: 1</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Sports Equipments: n/a</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Phone: +123456789</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Agency: Agence Ben Salem</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                <CardActions>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Button size="small" color="primary" onClick={() => handleRedirect(1)} >Visit The Original Post</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                    </Grid>
                </CardActions>
            </Card>
            </Grow>
      </Box>
  );
}
