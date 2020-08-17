import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }
    
    function createGrid(someObject){
        return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{ someObject.heading }</Typography>
                <Typography variant="h5">
                <CountUp start={0} end={someObject.value} duration={2} separator="," />
                </Typography>
                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{ someObject.description }</Typography>
            </CardContent>
        </Grid>
        );
    }
    const cases = [
        {
        value : confirmed.value,
        heading : 'Infected',
        description : 'Number of Active Cases of Covid-19'
        },
        {
        value : recovered.value,
        heading : 'Recovered',
        description : 'Number of Recoveries from Covid-19'
        },
        {
            value: deaths.value,
            heading: 'Deaths',
            description: 'Number of Deaths caused by Covid-19'
        } 
];
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {cases.map(createGrid)}
            </Grid>
        </div>
    );
}

export default Cards;