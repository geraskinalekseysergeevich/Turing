import React, { useEffect } from 'react';
import SidebarIcon from './SidebarIcon';
import classes from  './Sidebar.module.css';
import cross from '../../static/images/cross.svg';
import newDialog from '../../static/images/new_dialog.svg';
import { CreateNewDialogFetch } from '../../http/controllers/DialogsController.js';
import { sortDialogsFunction } from '../../utils/SortDialogsByTime.js';
import SidebarTimeGroup from './SidebarTimeGroup.jsx';

const Sidebar = ({visible, toggleSidebar, userDialogs, getHistoryFunction, setActiveDialog}) => {

    const { timeGroups, timeGroupLabels } = sortDialogsFunction(userDialogs)

    const getDialogHistory = (id) => {
        setActiveDialog(id)
        getHistoryFunction(id)
    }

    const createNewDialog = async () => {
        const response = await CreateNewDialogFetch()
        console.log(response)
    }

    return (
        <div className={`${classes.sidebar__container} ${visible ? classes.is_open : ''}`}>
            <div style={{padding: '65px 0 20px 60px', display: 'flex', gap: 20}}>
                <SidebarIcon icon={cross} onCLickFunction={toggleSidebar}/>
                <SidebarIcon 
                    icon={newDialog} 
                    onCLickFunction={createNewDialog}
                />
            </div>
            <div className={classes.sidebar_content}>
                <div className={classes.scroll__container}>
                    {timeGroupLabels.map(({ group, label }, index) => (
                        timeGroups[group].length > 0 && (
                            <SidebarTimeGroup
                                key={index}
                                timeGroup={timeGroups[group]}
                                label={label}
                                getDialogHistoryFunc={getDialogHistory}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;