import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarIcon from './components/Sidebar/SidebarIcon';
import DialogScreen from './components/DialogScreen/DialogScreen';
import burger_icon from './static/images/burger_icon.svg'
import info_icon from './static/images/info_icon.svg';
import HistoryScreen from './components/HistoryScreen/HistoryScreen';
import {Tooltip} from 'react-tooltip';
import data from './static/fields/data.json'
import BgAnimation from './components/BgAnimation/BgAnimation';

function App() {

    const [visibleSidebar, setVisibleSidebar]  = useState(false)
    const [visibleTuring, setVisibleTuring] = useState(true)
    const [selectedHistory, setSelectedHistory] = useState({ question: '', answer: '' })

    const toggleSidebar  = ()  =>  {
        setVisibleSidebar(!visibleSidebar)
    }

    const selectHistory = (quest, answ) => {
        setSelectedHistory({ 
            question: quest, 
            answer: answ 
        })
        toggleSidebar()
        setVisibleTuring(false)
    }

    const resetStates = () => {
        window.location.reload()
    }

    return (
        <div className="App">
            <BgAnimation visibleTuring={visibleTuring}/>
            <div className='content__container'>
                <Sidebar 
                    visible={visibleSidebar} 
                    toggleSidebar={toggleSidebar}
                    selectHistory={selectHistory}
                /> 
                {!visibleSidebar && 
                    <div style={{position: "absolute", left: "75px", top: "65px", zIndex: 10}}>
                        <SidebarIcon icon={burger_icon} toggleSidebar={toggleSidebar}/>
                    </div>
                }
                <div className='page'>
                    <Header resetStates={resetStates}/>
                    <div className='dialogcontent__container'>
                        {(selectedHistory.question !== '' && selectedHistory.answer !==  '')
                            ? <HistoryScreen selectedHistory={selectedHistory}/>
                            : <DialogScreen setVisibleTuring={setVisibleTuring}/>
                        }
                    </div>
                    <div className='footer__container'>
                        <img src={info_icon} alt="info icon" className='tooltip_hover_element' />
                        <Tooltip 
                            anchorSelect=".tooltip_hover_element" 
                            place="top-end" 
                            noArrow={true}
                            className='tooltip__container'
                            content={data.tooltipExample}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
