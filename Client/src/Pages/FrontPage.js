import React, { useEffect } from 'react';
import Header from '../Components/Header';
import SearchField from '../Components/SearchField';
import ShowPropertiesComponent from '../Components/ShowPropertiesComponent';
import Footer from '../Components/Footer';
import axios from 'axios';

export default function FrontPage(){
  const [mostViewedProperties, setMostViewedProperties] = React.useState([]) ;
  const [loggedIn, setLoggedIn] = React.useState(false);
  useEffect(() => {document.body.style.backgroundImage='';
  if(localStorage.getItem('authToken')){
  axios.post(process.env.REACT_APP_BACKEND_API + '/user/verify', null,
    {headers: {"Authorization": "Bearer: " + localStorage.getItem('authToken')}}).then( data => {if(data.status === 200) setLoggedIn(true); }).catch(err => localStorage.removeItem('authToken') );;
  axios.get(process.env.REACT_APP_BACKEND_API + '/property/getMostViewed'
    , {headers: {"Authorization": "Bearer: " + localStorage.getItem('authToken')}})
    .then( (data) => { setMostViewedProperties(data.data) });}
  else 
    axios.get(process.env.REACT_APP_BACKEND_API + '/property/getMostViewed' ).then( (data) => setMostViewedProperties(data.data));
  } , []);
  return <>
    <Header showSearchInHeader={"false"} isloggedIn={loggedIn } />
    <SearchField/>
    <ShowPropertiesComponent showProperties={mostViewedProperties}  headerText="Most Viewed Properties !" />
    <Footer/>
  </>
}