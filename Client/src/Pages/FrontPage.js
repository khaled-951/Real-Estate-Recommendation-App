import React, { useEffect } from 'react';
import Header from '../Components/Header';
import SearchField from '../Components/SearchField';
import ShowPropertiesComponent from '../Components/ShowPropertiesComponent';
import Footer from '../Components/Footer';

export default function FrontPage(){
    useEffect(() => document.body.style.backgroundImage='' );
    return <>
    <Header showSearchInHeader={"false"} isloggedIn={localStorage.getItem('authToken') !== null } />
    <SearchField/>
    <ShowPropertiesComponent headerText="Most Viewed Properties !" />
    <Footer/>
  </>
}