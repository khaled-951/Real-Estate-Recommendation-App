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
import { Link, useHistory } from 'react-router-dom' ;
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "8% auto",
  },
  media: {
    height: 140,
  },
});

export default function ForgotPasswordPage() {
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if( localStorage.getItem('authToken') ) axios.post(process.env.REACT_APP_BACKEND_API + '/user/verify', null,
      {headers: {"Authorization": "Bearer: " + localStorage.getItem('authToken')}}).then( data => {if(data.status === 200) history.push('/') });
        document.body.style.backgroundImage="url(/loginbackground.jpg)";
    } );

  return (
    <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
            Reset Password
        </Typography>
        <CardMedia
          className={classes.media}
          image="loginlogo.png"
          title="Login Form"
        />
        <CardContent>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" style={{width: "100%"}} label="Username or Email" />
                <Link to="/signup" >No Account ? No Problem, Sign Up Here !</Link>
            </form>
        </CardContent>
        <Box display="flex" justifyContent="center" >
            <CardActions>
                <Button variant="contained" color="primary">Reset</Button>
            </CardActions>
        </Box>
    </Card>
  );
}