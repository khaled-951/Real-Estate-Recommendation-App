import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    imgfluid:{
        width: "100%",
        "height": "70vh",
      },
    searchForm: {
        position: "absolute",
        top: "35%",
        width: "100%",
        textAlign: "center"
    },
    SearchField: {
        "backgroundColor": "white",
        width: "70%"
    },
    slogan: {
        "font-size": "18",
        "color": "darkblue"
    },
    hrClass: {
        marginTop: "25px",
        width: "70%",
        marginBottom: "25px"
    }
  }));

  

export default function SearchField(){
    const classes = useStyles();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = React.useState();

    React.useEffect(() => { document.getElementById('standard-basic').focus() });

    const handleSearchRedirect = (e) => {
        e.preventDefault();
        if(searchQuery)
            history.push('/search/' + searchQuery);
  };

    return <>
        <form className={classes.searchForm} noValidate autoComplete="off" onSubmit={handleSearchRedirect} >
            <h1 className={classes.slogan} >Your Dream Home Awaits</h1>
            <TextField className={classes.SearchField} value={searchQuery || '' } onChange={ (e) => setSearchQuery(e.target.value) }
             id="standard-basic" placeholder="Search For A Location, Agent or ZIP Code" />
        </form>
        <img src="/house.jpg" className={classes.imgfluid} alt="House" />
        <hr className={classes.hrClass}/>
    </>
}