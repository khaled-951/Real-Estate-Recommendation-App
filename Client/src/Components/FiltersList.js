import React from 'react';
import { Card, Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
      width: "20vw",
      backgroundColor: "white",
      minWidth: "280px",
    },
    cardStyle: {
      height: "100%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: "100%",
      width: "100%"
    },
    bedsStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: "auto",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    minPriceStyle: {
      marginRight: "10px",
    },
  }));

export default function FiltersList(props){
    const classes = useStyles();
    
    return(
    <Container  className={ classes.containerStyle } >
        <Card raised={true} className={ classes.cardStyle } >
            <CardContent>
                <Typography gutterBottom>123,450 Properties Found !</Typography>
                <Typography gutterBottom>Price Range: </Typography>
                <Box display="flex">
                  <TextField className={classes.minPriceStyle} value={ props.minPriceState || '' } onChange={ e => {props.setMinPriceState(e.target.value)} }
                   label="Min :" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" />
                  <TextField value={props.maxPriceState || ''} onChange={ e => {props.setMaxPriceState(e.target.value)} } 
                  label="Max :" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" />
                </Box>
                <Typography gutterBottom>Bedrooms: </Typography>
                <div className={classes.bedsStyle}>
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button variant={ props.bedroomsState === '0' && "contained" } onClick={() => props.setBedroomsState('0') } >Studio</Button>
                    <Button variant={ props.bedroomsState === '1' && "contained" } onClick={() => props.setBedroomsState('1') } >1+</Button>
                    <Button variant={ props.bedroomsState === '2' && "contained" } onClick={() => props.setBedroomsState('2') }>2+</Button>
                    <Button variant={ props.bedroomsState === '3' && "contained" } onClick={() => props.setBedroomsState('3') }>3+</Button>
                    <Button variant={ props.bedroomsState === '4' && "contained" } onClick={() => props.setBedroomsState('4') }>4+</Button>
                    <Button variant={ props.bedroomsState === '5' && "contained" } onClick={() => props.setBedroomsState('5') }>5+</Button>
                  </ButtonGroup>
                </div>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Typography gutterBottom>AirConditioned: </Typography>
                  <Switch checked={props.airConditionedState.checkedA} onChange={props.handleAirConditionedChange} name="checkedA" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                </Grid>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Typography gutterBottom>Heated: </Typography>
                  <Switch
                    checked={props.heatedState.checkedA}
                    onChange={props.handleHeatedChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </Grid>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Typography gutterBottom>Sports Equipment: </Typography>
                  <Switch
                    checked={props.hasSportsState.checkedA}
                    onChange={props.handleHasSportsChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </Grid>
                
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-mutiple-checkbox-label">State Names</InputLabel>
                  <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={props.stateNames}
                    onChange={props.handleStateNamesChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {props.states.map((stateName) => (
                      <MenuItem key={stateName} value={stateName}>
                        <Checkbox checked={props.stateNames.indexOf(stateName) > -1} />
                        <ListItemText primary={stateName} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel >Property Types</InputLabel>
                  <Select
                    labelId="demo-mutiple-checkbox-label"
                    multiple
                    value={props.propertyTypesState}
                    onChange={props.handlePropertyTypesChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {props.propertyTypes.map((propertyType) => (
                      <MenuItem key={propertyType} value={propertyType}>
                        <Checkbox checked={props.propertyTypesState.indexOf(propertyType) > -1} />
                        <ListItemText primary={propertyType} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
            </CardContent>
        </Card>
    </Container>
    );
}