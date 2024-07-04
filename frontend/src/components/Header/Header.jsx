import React from 'react';
import classes from './Header.module.css';
import logo from '../../static/images/logo.png'

const Header = () => {
    return (
        <div className={classes.header__container}>
            <div className={classes.logo}>
                <img src={logo} alt="logoicon" />
            </div>
        </div>
    );
};

export default Header;