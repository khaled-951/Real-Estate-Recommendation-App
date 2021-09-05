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
import isEmail from 'validator/lib/isEmail';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "8% auto",
  },
  media: {
    height: 140,
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  let form = {} ;
  const [loginState, setLoginState] = React.useState('');
  const [passwordState, setPasswordState] = React.useState('');

  const getAccessToken = () => {
    if(loginState !== '' && passwordState !== '')
    {
      if(isEmail(loginState)) 
        form = { email: loginState, password: passwordState };
      else 
        form = { username: loginState, password: passwordState };

      axios.post(process.env.REACT_APP_BACKEND_API + "/user/login", form )
        .then(data => {localStorage.setItem('authToken', data.data); history.push('/'); }).catch(err => alert('Check Your Credentials'));
    }
  }

  useEffect(() => {
    if( localStorage.getItem('authToken') ) axios.post(process.env.REACT_APP_BACKEND_API + '/user/verify', null,
      {headers: {"Authorization": "Bearer: " + localStorage.getItem('authToken')}}).then( data => {if(data.status === 200) history.push('/') });
    document.body.style.backgroundImage="url(/loginbackground.jpg)";
    } );

  return (
    <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
            Sign In
        </Typography>
        <CardMedia
          className={classes.media}
          image="loginlogo.png"
          title="Login Form"
        />
        <CardContent>
            <form noValidate autoComplete="off">
                <TextField style={{width: "100%"}} onChange={(e) => setLoginState(e.target.value)} label="Username or Email" />
                <TextField style={{width: "100%"}} onChange={(e) => setPasswordState(e.target.value)} type="password" label="Password" />
                <Link to="/ForgotPassword" >Forgot Your Password ?</Link><br/>
                <Link to="/signup" >No Account ? No Problem, Sign Up Here !</Link>
            </form>
        </CardContent>
        <Box display="flex" justifyContent="center" >
            <CardActions>
                <Button onClick={getAccessToken} variant="contained" color="primary">Login</Button>
                <Button onClick={() => history.push('/') } variant="contained" color="primary">Proceed Without Login</Button>
            </CardActions>
        </Box>
    </Card>
  );
}