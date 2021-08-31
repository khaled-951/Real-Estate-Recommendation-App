import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ShowPropertiesComponent from '../Components/ShowPropertiesComponent';
import PropertyDetails from '../Components/PropertyDetails';
import axios from 'axios';

export default function ViewPropertyPage() {
    const [searchQueryState, setSearchQueryState] = React.useState();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [propertyDetailsAndRecommended, setPropertyDetailsAndRecommended] = React.useState();
    const { propertyId } = useParams();
    /*useEffect(() => { document.body.style.backgroundImage=''; 
        axios.get(process.env.REACT_APP_BACKEND_API + '/property/getPropertyDetailsAndRecommended/' + propertyId)
        .then(data => setPropertyDetailsAndRecommended(data.data))} , [propertyId]);*/

    useEffect(() => {document.body.style.backgroundImage='';
        if(localStorage.getItem('authToken')){
            axios.post(process.env.REACT_APP_BACKEND_API + '/user/verify', null,
            {headers: {"Authorization": "Bearer: " + localStorage.getItem('authToken')}})
            .then( data => {if(data.status === 200) setLoggedIn(true); }).catch(err => localStorage.removeItem('authToken') );}
        if(localStorage.getItem('authToken')){
          axios.get(process.env.REACT_APP_BACKEND_API + '/property/getPropertyDetailsAndRecommended/' + propertyId
          , {headers: {"Authorization": "Bearer: " + localStorage.getItem('authToken')}}).then( (data) => setPropertyDetailsAndRecommended(data.data));
        }else 
            setLoggedIn(false);
          axios.get(process.env.REACT_APP_BACKEND_API + '/property/getPropertyDetailsAndRecommended/' + propertyId ).then( (data) => setPropertyDetailsAndRecommended(data.data));
        } , [propertyId]);
    return (
        <>
            <Header searchQuery={searchQueryState} setSearchQueryState={(e) => setSearchQueryState(e)} showSearchInHeader={"true"} 
            isloggedIn={loggedIn }/>
            <PropertyDetails property={propertyDetailsAndRecommended?.propertyDetails} />
            <ShowPropertiesComponent showProperties={propertyDetailsAndRecommended} headerText="Recommended For You" />
            <Footer/>
        </> 
    );
}