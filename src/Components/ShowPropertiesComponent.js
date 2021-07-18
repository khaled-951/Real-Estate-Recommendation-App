import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginRight: "25px",
      marginLeft: "25px",
      marginTop: "10px",
      marginBottom: "10px"
    },
    hClass: {
        textAlign: "center",
        fontSize: "24px"
    },
    hrClass: {
        marginTop: "25px",
        width: "70%",
        marginBottom: "25px"
    },
  });

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function ShowPropertiesComponent(){
    const history = useHistory();
    const classes = useStyles();
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        setOpenSuccess(false);
        setOpenError(false);
    };

    const handleFavorites = (e) => {
        if(localStorage.getItem('authToken') !== null){
            handleClose();
            if(e.target.checked === true)
                setOpenSuccess(true);
            else
                setOpenError(true);
        }else{
            e.target.checked = false ;
            setOpenDialog(true);
        }
    };

    const handleRedirect = (id) => {
        history.push("/property/" + id);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSignUpCloseDialog = () => {
        history.push("/signup");
    };

    const handleSignInCloseDialog = () => {
        history.push("/login");
    };

    return (
    <>
    <Container className={classes.containerClass}>
        <h1 className={classes.hClass} >Most Viewed Properties !</h1>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Grow in={true}>
            <Card  className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="house.jpg" title="Contemplative Reptile" />
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
                        <Button size="small" color="primary" onClick={() => handleRedirect(1)} >View Property</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                        <FormControlLabel onClick={ handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card></Grow>
            <Grow in={true}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="house.jpg" title="Contemplative Reptile" />
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
                        <Button size="small" color="primary" onClick={() => handleRedirect(2)} >View Property</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                        <FormControlLabel onClick={ handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card></Grow>
            <Grow in={true}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="house.jpg" title="Contemplative Reptile" />
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
                        <Button size="small" color="primary" onClick={() => handleRedirect(3)} >View Property</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                        <FormControlLabel onClick={ handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card>
            </Grow>
            <Grow in={true}>
            <Card  className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="house.jpg" title="Contemplative Reptile" />
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
                        <Button size="small" color="primary" onClick={() => handleRedirect(4)}>View Property</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                        <FormControlLabel onClick={ handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card></Grow>
            <Grow in={true}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="house.jpg" title="Contemplative Reptile" />
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
                        <Button size="small" color="primary" onClick={() => handleRedirect(5)}>View Property</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                        <FormControlLabel onClick={ handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card></Grow>
            <Grow in={true}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="house.jpg" title="Contemplative Reptile" />
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
                        <Button size="small" color="primary" onClick={() => handleRedirect(6)} >View Property</Button>
                        <VisibilityIcon/><Typography >123k</Typography>
                        <FormControlLabel onClick={ handleFavorites } control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                    </Grid>
                </CardActions>
            </Card>
            </Grow>
        </Box>
        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Property Added To Your Favorites !
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Property Removed From Your Favorites !
        </Alert>
      </Snackbar>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Sign Up Or Sign In ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            In Order To Add A Property To Your Favorites You Need To Have An Account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
            <Button onClick={handleSignUpCloseDialog} color="primary">Sign Up</Button>
            <Button onClick={handleSignInCloseDialog} color="primary">Sign In</Button>
        </DialogActions>
      </Dialog>
    </Container>
    <hr className={classes.hrClass}/>
    </> 
    );
}