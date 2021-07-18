import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        "background-color": "white",
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

    return <>
        <form className={classes.searchForm} noValidate autoComplete="off">
            <h1 className={classes.slogan} >Your Dream Home Awaits</h1>
            <TextField className={classes.SearchField} id="standard-basic" placeholder="Search For A Location, Agent or ZIP Code" />
        </form>
        <img src="house.jpg" className={classes.imgfluid} alt="House" />
        <hr className={classes.hrClass}/>
    </>
}