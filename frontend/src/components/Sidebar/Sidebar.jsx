import React from 'react';
import SidebarIcon from './SidebarIcon';
import classes from  './Sidebar.module.css';
import cross from '../../static/images/cross.svg';
import newDialog from '../../static/images/new_dialog.svg';
import { authorization, createNewDialog } from '../../http/index.js';

const Sidebar = ({visible, toggleSidebar, userDialogs, getHistoryFunction, setActiveDialog}) => {

    const clickUpdate = (id) => {
        setActiveDialog(id)
        getHistoryFunction(id)
    }

    const createNewDialogTest = async () => {
        const response = await createNewDialog()
        console.log(response)
    }

    const auth = async () => {
        const response = await authorization()
        console.log(response)
    }

    return (
        <div className={`${classes.sidebar__container} ${visible ? classes.is_open : ''}`}>
            <div style={{padding: '65px 0 0 60px', display: 'flex', gap: 20}}>
                <SidebarIcon icon={cross} onCLickFunction={toggleSidebar}/>
                <SidebarIcon 
                    icon={newDialog} 
                    onCLickFunction={createNewDialogTest}
                />
            </div>
            <div className={classes.sidebar_content}>
                <div className={classes.timeline}>Предыдущие 7 дней</div>
                <ul>
                    {userDialogs.map((dialog) => (
                        <div key={dialog.id} onClick={() => clickUpdate(dialog.id)}>
                            <li>{dialog.title}</li>
                        </div>
                    ))}
                </ul>
                <button style={{marginLeft: 60, marginTop: 10}} onClick={auth}>Войти</button>
            </div>
        </div>
    );
};

export default Sidebar;