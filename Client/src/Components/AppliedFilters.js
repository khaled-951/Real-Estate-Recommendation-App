import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import FaceIcon from '@material-ui/icons/Face';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function AppliedFilters(props) {
  const classes = useStyles();

  return (
    <Container>
        <Box  m={3}>
            <Paper component="ul" className={classes.root} elevation={12} >
            {props.chipData.map((data) => {
                //let icon;

                if (data.label === 'React') {
                //icon = <TagFacesIcon />;
                }

                return (
                <li key={data.key}>
                    <Chip color="secondary" className={classes.chip} label={data.label} onDelete={props.handleChipDelete(data)} icon={<FaceIcon />} />
                </li>
                );
            })}
            </Paper>
        </Box>
    </Container>
  );
}
