import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AppliedFilters from '../Components/AppliedFilters';
import { useParams } from "react-router-dom";
import SearchResultsComponent from '../Components/SearchResultsComponent';
import { Grid, Box } from '@material-ui/core';
import FiltersList from '../Components/FiltersList';

export default function SearchPage(){
    const { searchQuery } = useParams();

    return (
        <>
            <Header showSearchInHeader={"true"} searchQuery={searchQuery} isloggedIn={localStorage.getItem('authToken') !== null } />
            <AppliedFilters/>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                <FiltersList/>
                <SearchResultsComponent/>
            </Box>
            <Footer/>
        </>
    );
}