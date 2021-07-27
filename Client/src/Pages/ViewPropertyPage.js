import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ShowPropertiesComponent from '../Components/ShowPropertiesComponent';
import PropertyDetails from '../Components/PropertyDetails';
import axios from 'axios';

export default function ViewPropertyPage() {
    const [searchQueryState, setSearchQueryState] = React.useState();
    const [propertyDetailsAndRecommended, setPropertyDetailsAndRecommended] = React.useState();
    const { propertyId } = useParams();
    useEffect(() => { document.body.style.backgroundImage=''; 
        axios.get(process.env.REACT_APP_BACKEND_API + '/property/getPropertyDetailsAndRecommended/' + propertyId)
        .then(data => setPropertyDetailsAndRecommended(data.data))} , [propertyId]);
    return (
        <>
            <Header searchQuery={searchQueryState} setSearchQueryState={(e) => setSearchQueryState(e)} showSearchInHeader={"true"} 
            isloggedIn={localStorage.getItem('authToken') !== null }/>
            <PropertyDetails property={propertyDetailsAndRecommended?.propertyDetails} />
            <ShowPropertiesComponent showProperties={propertyDetailsAndRecommended?.recommended} headerText="Recommended For You" />
            <Footer/>
        </> 
    );
}