import React from 'react';
import SidebarIcon from './SidebarIcon';
import classes from  './Sidebar.module.css';
import cross from '../../static/images/cross.svg'
import data from '../../static/fields/data.json';

const Sidebar = ({visible, toggleSidebar, selectHistory}) => {
    return (
        <div className={`${classes.sidebar__container} ${visible ? classes.is_open : ''}`}>
            <div style={{padding: '65px 0 0 75px'}}>
                <SidebarIcon icon={cross} toggleSidebar={toggleSidebar}/>
            </div>
            <div className={classes.sidebar_content}>
                <div className={classes.timeline}>Предыдущие 7 дней</div>
                <ul>
                    {Object.entries(data.historyExamples).map(([question, answer], index) => (
                        <div key={index} onClick={() => selectHistory(question, answer)}>
                            <li key={index}>{question}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;