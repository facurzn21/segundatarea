import React from 'react';
import Card from '../Card/Card';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.row}>
            <Card title="CARDIO WORKOUTS"/>
            <Card title="STRENGTH WORKOUTS" />
            <Card title="PUMP WORKOUTS" />
        </div>
    );
};

export default Home;