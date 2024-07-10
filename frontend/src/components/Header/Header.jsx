import React from 'react';
import classes from './Header.module.css';
import logo from '../../static/images/logo.png'

const Header = ({ resetStates }) => {
    return (
        <div className={classes.header__container}>
            <div className={classes.logo}>
                <img src={logo} alt="logoicon" onClick={() => resetStates()}/>
            </div>
        </div>
    );
};

export default Header;