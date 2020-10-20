import React from 'react';

import classes from "./Preview.module.css";


function preview () {
    return (
        <img
        src={require('../../assets/images/Preview.svg')}
        alt="Weather App Icon"
        className={classes.Preview} />
    );
}

export default preview;