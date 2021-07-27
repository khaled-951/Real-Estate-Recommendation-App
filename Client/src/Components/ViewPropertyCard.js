import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginRight: "10px",
      marginLeft: "10px",
      marginTop: "10px",
      marginBottom: "10px"
    },
  });

export default function ViewPropertyCard(props) {
    const history = useHistory();
    const classes = useStyles();

    const handleRedirect = (id) => {
        history.push("/property/" + id);
    };

    return (
        <>
        <Grow in={true}>
            <Card raised={true} className={classes.root}>
                <CardActionArea onClick={() => handleRedirect(props.property?._id || 1)}>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="/house.jpg" title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{ props.property?.price || "N/A" }</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Button size="small" color="primary" onClick={() => handleRedirect(props.property?._id || 1)} >View Property</Button>
                        <VisibilityIcon/><Typography >{ props.property?.views || "N/A" }</Typography>
                        <FormControlLabel onClick={ props.handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card>
            </Grow>
            </>
    );
}