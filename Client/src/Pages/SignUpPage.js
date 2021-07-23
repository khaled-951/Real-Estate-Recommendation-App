import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom' ;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "8% auto",
  },
  media: {
    height: 140,
  },
});

export default function SignUpPage() {
  const classes = useStyles();
  useEffect(() => {
        document.body.style.backgroundImage="url(/loginbackground.jpg)";
    } );

  return (
    <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
            Sign Up
        </Typography>
        <CardMedia
          className={classes.media}
          image="/loginlogo.png"
          title="Login Form"
        />
        <CardContent>
            <form noValidate autoComplete="off">
                <TextField style={{width: "100%"}} label="Username" />
                <TextField style={{width: "100%"}} type="email" label="Email" />
                <TextField style={{width: "100%"}} type="password" label="Password" />
                <TextField style={{width: "100%"}} type="password" label="Repeat Password" />
                <Link to="/login" >Already Have An Account ? Login Here !</Link>
            </form>
        </CardContent>
        <Box display="flex" justifyContent="center" >
            <CardActions>
                <Button variant="contained" color="primary">Sign Up</Button>
            </CardActions>
        </Box>
    </Card>
  );
}