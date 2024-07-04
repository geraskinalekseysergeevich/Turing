import React from 'react';
import classes from './SidebarIcon.module.css';

const SidebarIcon = ({icon, toggleSidebar}) => {
    return (
        <div className={classes.button_container} onClick={toggleSidebar}>
            <img src={icon} alt='icon'/>
        </div>
    );
};

export default SidebarIcon;