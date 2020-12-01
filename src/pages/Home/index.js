import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import styles from './styles';
import { MovieIcon } from '../../icons';

export default ({ history }) => {
    const [searchText, setSearchText] = useState('');
    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextClick = event => {
        setSearchText('');
    }

    const handleSearchTextClick = event => {
        history.push(`/results?movieName=${searchText}`);
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido!</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}></MovieIcon>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder="Buscar..."
                    className={classes.textFieldSearch}
                    onChange={handleSearchTextChange} />
                <Grid className={classes.buttonsCointainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container >
    );
}