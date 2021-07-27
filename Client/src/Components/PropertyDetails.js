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

export default function PropertyDetails(props) {
  const classes = useStyles();

  const handleRedirect = (link) => {
    window.location.replace(link);
};

  return (
    
      <Box display="flex" flexWrap="wrap" justifyContent="center" >
        <Grow in={true}>
          <CardMedia className={classes.imageStyle} component="img" alt="Contemplative Reptile" width="100%" height="auto" image="/house.jpg" title="Contemplative Reptile" />
        </Grow>
        <Grow in={true}>
            <Card raised={true} className={classes.detailsStyle}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">Price: {props.property?.price || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Date: {props.property?.dateAnnonce || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Habitable Area: {props.property?.superficie_habitable || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Land Surface: {props.property?.superficie_terrain || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">ZIP Code: {props.property?.codeP || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Delegation: {props.property?.delegation || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">localite: {props.property?.localite || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Address: {props.property?.adresse || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Year Built: {props.property?.anneeConst || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Number Of Pieces: {props.property?.nbpiece || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Type: {props.property?.typeImm || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">fonds: {props.property?.fonds || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Outdoors: {props.property?.plein_air || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Baths: {props.property?.salle_de_bain || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">constructible: {props.property?.constructible || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">service: {props.property?.service || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Heating/Air-Conditioning: {props.property?.chauffage || 'N/A '}/{props.property?.climatisation || ' N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Kitchen: {props.property?.cuisine || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Sports Equipments: {props.property?.installations_sportives || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Phone: {props.property?.tel || 'N/A'}</Typography>
                        <Typography gutterBottom variant="h6" component="h6">Agency: {props.property?.agence || 'N/A'}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.property?.description || 'N/A'}</Typography>
                    </CardContent>
                <CardActions>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Button size="small" color="primary" onClick={() => handleRedirect(props.property?.link || 'error')} >Visit The Original Post</Button>
                        <VisibilityIcon/><Typography >{props.property?.views || 'N/A'}</Typography>
                    </Grid>
                </CardActions>
            </Card>
            </Grow>
      </Box>
  );
}
