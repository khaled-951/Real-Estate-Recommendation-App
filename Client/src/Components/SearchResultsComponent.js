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
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        minWidth: 280,
        border: "10px solid lightblue",
        borderRadius: "25px",
        marginTop: "10px",
        maxWidth: "75vw",
        height: "100%",
        maxHeight: "80vh",
        overflow: "auto"
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

export default function SearchResultsComponent(props){
    const history = useHistory();
    const classes = useStyles();
    const [results, setResults] = React.useState([]);
    const [pageNumberState, setPageNumberState] = React.useState(0);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    React.useEffect(() => axios.post(process.env.REACT_APP_BACKEND_API + '/property/searchQuery/' + pageNumberState, {
      searchQuery: props.chipData.filter(chip => chip.key === 0)[0]?.label.slice(13),
      bedrooms: props.chipData.filter(chip => chip.key === 3)[0]?.label.slice(10),
      airConditioned: props.chipData.filter(chip => chip.key === 4)[0] ? true : undefined,
      heated: props.chipData.filter(chip => chip.key === 5)[0] ? true : undefined,
      hasSportsEquipment: props.chipData.filter(chip => chip.key === 6)[0] ? true : undefined,
      states: props.chipData.filter(chip => chip.key === 7)[0]?.label.slice(8).split(','),
      typeImm: props.chipData.filter(chip => chip.key === 8)[0]?.label.slice(16).split(',')
    }).then(data => { setResults(data.data); props.setResultsCount(data.data.resultsCount); } ), [pageNumberState, props.chipData]);

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
    <Container className={classes.root} >
        <h1 className={classes.hClass} >{ props.headerText }</h1>
        <Box display="flex" flexWrap="wrap" justifyContent="center" style={{ "height" : "100%", "backgroundColor" : "white" }} >
          {results?.results?.map( (property, index) => {
              return <ViewPropertyCard key={index} property={property} openSuccess={openSuccess} openError={openError} 
                handleClose={handleClose} handleFavorites={handleFavorites}/>
            } )}
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center" style={{ "height" : "100%", "backgroundColor" : "white" }} >
        { results.resultsCount > 6 &&
            <Pagination count={ parseInt(results.resultsCount / 6) } color="primary" onChange={(e, pageNumber) => setPageNumberState(pageNumber - 1)} />
          }
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