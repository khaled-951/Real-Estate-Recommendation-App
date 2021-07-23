import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AppliedFilters from '../Components/AppliedFilters';
import { useParams } from "react-router-dom";
import SearchResultsComponent from '../Components/SearchResultsComponent';
import { Box } from '@material-ui/core';
import FiltersList from '../Components/FiltersList';

const states = ['Tunis', 'Ariana', 'Sousse', 'Monastir'];
const propertyTypes = ['Appartment', 'Commercial', 'House'];

export default function SearchPage(){
    const { searchQuery } = useParams();
    const [searchQueryState, setSearchQueryState] = React.useState(searchQuery);
    const [stateNames, setStateNames] = React.useState([]);
    const [propertyTypesState, setPropertyTypesState] = React.useState([]);
    const [minPriceState, setMinPriceState] = React.useState();
    const [maxPriceState, setMaxPriceState] = React.useState();
    const [airConditionedState, setAirConditionedState] = React.useState({ checkedA: false, checkedB: false, });
    const [heatedState, setHeatedState] = React.useState({ checkedA: false, checkedB: false, });
    const [hasSportsState, setHasSportsState] = React.useState({ checkedA: false, checkedB: false, });
    const [chipData, setChipData] = React.useState( searchQueryState ? [{ key: 0, label: 'SearchQuery: ' + searchQueryState }] : [] );
    const [bedroomsState, setBedroomsState] = React.useState();

    const handleStateNamesChange = (event) => { setStateNames(event.target.value); };
    const handlePropertyTypesChange = (event) => { setPropertyTypesState(event.target.value); };
    const handleAirConditionedChange = (event) => { setAirConditionedState({ ...airConditionedState, [event.target.name]: event.target.checked }); };
    const handleHasSportsChange = (event) => { setHasSportsState({ ...hasSportsState, [event.target.name]: event.target.checked }); };
    const handleHeatedChange = (event) => { setHeatedState({ ...heatedState, [event.target.name]: event.target.checked }); };
    const handleChipAdd = (chipToAdd) => () => { setChipData( (chips) => { return [...chips, chipToAdd] } ); };
    const handleChipDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        if(chipToDelete.key === 0)
            setSearchQueryState("");
        else if(chipToDelete.key === 1)
            setMinPriceState("");
        else if(chipToDelete.key === 2)
            setMaxPriceState("");
        else if(chipToDelete.key === 3)
            setBedroomsState("");
        else if(chipToDelete.key === 4)
            setAirConditionedState({ ...airConditionedState, 'checkedA': false });
        else if(chipToDelete.key === 5)
            setHeatedState({ ...heatedState, 'checkedA': false });
        else if(chipToDelete.key === 6)
            setHasSportsState({ ...hasSportsState, 'checkedA': false });
        else if(chipToDelete.key === 7)
            setStateNames([]);
        else if(chipToDelete.key === 8)
            setPropertyTypesState([]);
    };

    const handleChipAddSync = (chipToAdd)  => { setChipData( (chips) => { return [...chips, chipToAdd] } ); };
    const handleChipUpdateSync = (chipToUpdate)  => { setChipData( (chips) => { return [...(chips.filter((chip) => chip.key !== chipToUpdate.key)), chipToUpdate] } ); };
    const handleChipDeleteSync = (chipToDelete) => { setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key)); };

    return (
        <>
            <Header showSearchInHeader={"true"} searchQuery={searchQueryState} 
            setSearchQueryState={(e) => { if(!e) handleChipDeleteSync({ key: 0 }); else handleChipUpdateSync({ key: 0, label: 'Search Query: ' + e });setSearchQueryState(e) } } 
            isloggedIn={localStorage.getItem('authToken') !== null } />
            <AppliedFilters handleChipAdd={handleChipAdd} handleChipDelete={handleChipDelete} chipData={chipData} />
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                <FiltersList airConditionedState={ airConditionedState } 
                handleAirConditionedChange={(e) => { if(!e.target.checked) handleChipDeleteSync({ key: 4 }); else handleChipAddSync({ key: 4, label: 'AirConditioned' }); handleAirConditionedChange(e)}}
                heatedState={heatedState} 
                handleHeatedChange={(e) => { if(!e.target.checked) handleChipDeleteSync({ key: 5 }); else handleChipAddSync({ key: 5, label: 'Heated' }); handleHeatedChange(e) } }
                hasSportsState={hasSportsState} 
                handleHasSportsChange={(e) => { if(!e.target.checked) handleChipDeleteSync({ key: 6 }); else handleChipAddSync({ key: 6, label: 'Has Sports Equipment' }); handleHasSportsChange(e) } }
                minPriceState={minPriceState} setMinPriceState={(e) => { if(!e) handleChipDeleteSync({ key: 1 }); else handleChipUpdateSync({ key: 1, label: 'Price Min: ' + e }); setMinPriceState(e) } }
                maxPriceState={maxPriceState} setMaxPriceState={(e) => { if(!e) handleChipDeleteSync({ key: 2 }); else handleChipUpdateSync({ key: 2, label: 'Price Max: ' + e }); setMaxPriceState(e) } }
                bedroomsState={bedroomsState} setBedroomsState={(e) => { if(!e) handleChipDeleteSync({ key: 3 }); else handleChipUpdateSync({ key: 3, label: 'Bedrooms: ' + e }); setBedroomsState(e) } }
                states={states} propertyTypes={propertyTypes} stateNames={stateNames} propertyTypesState={propertyTypesState} 
                handleStateNamesChange={(e) => { if(e.target.value.length === 0) handleChipDeleteSync({ key: 7 }); else handleChipUpdateSync({ key: 7, label: 'States: ' + e.target.value }); handleStateNamesChange(e) } }
                handlePropertyTypesChange={(e) => { if(e.target.value.length === 0) handleChipDeleteSync({ key: 8 }); else handleChipUpdateSync({ key: 8, label: 'Property Types: ' + e.target.value }); handlePropertyTypesChange(e) } }
                />
                <SearchResultsComponent chipData={chipData} />
            </Box>
            <Footer/>
        </>
    );
}