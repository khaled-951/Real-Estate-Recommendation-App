import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ShowPropertiesComponent from '../Components/ShowPropertiesComponent';
import PropertyDetails from '../Components/PropertyDetails';

export default function ViewPropertyPage() {
    const { propertyId } = useParams();
    console.log(propertyId);
    useEffect(() => document.body.style.backgroundImage='' );
    
    return (
        <>
            <Header showSearchInHeader={"true"} isloggedIn={localStorage.getItem('authToken') !== null }/>
            <PropertyDetails/>
            <ShowPropertiesComponent headerText="Recommended For You" />
            <Footer/>
        </> 
    );
}