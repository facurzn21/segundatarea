import React from 'react';
import Card from '../Card/Card';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.image}>
            <div className={classes['titular']}>
                <h1> START YOUR FREE WORKOUT WITH US </h1>
            </div> 
            <div className={classes.row}>
                {/* se define cada carta como componente y le paso el titulo como props */}
                <Card title="CARDIO WORKOUTS"/>
                <Card title="STRENGTH WORKOUTS" />
                <Card title="PUMP WORKOUTS" />
            </div>
        </div>
    );
};

export default Home;