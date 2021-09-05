import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';
import ViewPropertyCard from './ViewPropertyCard';
import axios from 'axios';

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

export default function ShowPropertiesComponent(props){
    const history = useHistory();
    const classes = useStyles();
    const [checkedState, setCheckedState] = React.useState(props.showProperties?.favorites || [false, false, false, false, false, false]);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    React.useEffect( () => { setCheckedState(props.showProperties?.favorites);  } , [props]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        setOpenSuccess(false);
        setOpenError(false);
    };

    const handleFavorites =(e, propertyId, key) => {
      e.preventDefault();
        if(localStorage.getItem('authToken') !== null){
            handleClose();
            axios.post( process.env.REACT_APP_BACKEND_API + '/favorit/toggleFavorit', { propertyId }, 
                { headers: { 'Authorization' : 'Bearer: ' + localStorage.getItem('authToken')} } )
                  .then((data) => { 
                  if(data.data === 'Favorit Added') {setCheckedState( (oldState) => { oldState[key] = true; return oldState;} ); setOpenSuccess(true);  }
                   else if (data.data === 'Favorit Removed') {setCheckedState( (oldState) => { oldState[key] = false; return oldState;} );  setOpenError(true); } }  );
        }else{
            /*props.setMostViewedProperties( (data) => { return { ...data, ...data.favorites[key] = true } } )*/
            setOpenDialog(true);
        }
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
    <Container >
        <h1 className={classes.hClass} >{ props.headerText }</h1>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {props.showProperties?.data?.map( (property, index) => {
            return <ViewPropertyCard key={index} property={property} checked={checkedState ? checkedState[index] : false} man={index} 
              openSuccess={openSuccess} openError={openError} handleClose={handleClose} handleFavorites={handleFavorites}/>
          } )}
        </Box>
    </Container>
    <hr className={classes.hrClass}/>
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
    </> 
    );
}