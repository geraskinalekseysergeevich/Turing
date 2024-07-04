import React from 'react';
import SidebarIcon from './SidebarIcon';
import classes from  './Sidebar.module.css';
import cross from '../../static/images/cross.svg'
import data from '../../static/fields/data.json';

const Sidebar = ({visible, toggleSidebar}) => {
    return (
        <div className={`${classes.sidebar__container} ${visible ? classes.is_open : ''}`}>
            <SidebarIcon icon={cross} toggleSidebar={toggleSidebar}/>
            <div className={classes.sidebar_content}>
                <ul>
                    {data.historyExamples.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;