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

export default function SignUpPage() {
  let form = {} ;
  const history = useHistory();
  const classes = useStyles();
  const [usernameState, setUsernameState] = React.useState('');
  const [passwordState, setPasswordState] = React.useState(''); 
  const [emailState, setEmailState] = React.useState('');
  const [passwordConfirmState, setPasswordConfirmState] = React.useState(''); 

  const handleRegister = () => {
    if(usernameState !== '' && passwordState !== '' && emailState !== '' && passwordConfirmState !== '' && (passwordState === passwordConfirmState))
    {
      if(isEmail(emailState))
      {
        form = {username: usernameState, password: passwordState, email: emailState, passwordConfirm: passwordConfirmState};
        axios.post(process.env.REACT_APP_BACKEND_API + '/user/register', form)
          .then(data => { if (data.data === 'Success' ) {history.push('/login')} else alert('Verify Your Inputs Please') })
          .catch(err => alert('Verify Your Inputs Please'));
      }
    }
  }

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
                <TextField style={{width: "100%"}} onChange={(e) => setUsernameState(e.target.value) } label="Username" />
                <TextField style={{width: "100%"}} onChange={(e) => setEmailState(e.target.value) } type="email" label="Email" />
                <TextField style={{width: "100%"}} onChange={(e) => setPasswordState(e.target.value) } type="password" label="Password" />
                <TextField style={{width: "100%"}} onChange={(e) => setPasswordConfirmState(e.target.value) } type="password" label="Repeat Password" />
                <Link to="/login" >Already Have An Account ? Login Here !</Link>
            </form>
        </CardContent>
        <Box display="flex" justifyContent="center" >
            <CardActions>
                <Button onClick={handleRegister} variant="contained" color="primary">Sign Up</Button>
            </CardActions>
        </Box>
    </Card>
  );
}