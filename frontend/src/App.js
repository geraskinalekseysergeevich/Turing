import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarIcon from './components/Sidebar/SidebarIcon';
import DialogScreen from './components/DialogScreen/DialogScreen';
import burger_icon from './static/images/burger_icon.svg'
import info_icon from './static/images/info_icon.svg';
import HistoryScreen from './components/HistoryScreen/HistoryScreen';

function App() {

    const [visible, setVisible]  = useState(false)
    const [selectedHistory, setSelectedHistory] = useState({ question: '', answer: '' })

    const toggleSidebar  = ()  =>  {
        setVisible(!visible)
    }

    const selectHistory = (quest, answ) => {
        setSelectedHistory({ 
            question: quest, 
            answer: answ 
        })
        if (quest !== '' && answ !== '') { 
            toggleSidebar()
        }
        
    }

    return (
        <div className="App">
            <div className='content__container'>
                <Sidebar 
                    visible={visible} 
                    toggleSidebar={toggleSidebar}
                    selectHistory={selectHistory}
                /> 
                {!visible && 
                    <div style={{position: "absolute", left: "75px", top: "65px", zIndex: 10}}>
                        <SidebarIcon icon={burger_icon} toggleSidebar={toggleSidebar}/>
                    </div>
                }
                <div className='page'>
                    <Header selectHistory={selectHistory}/>
                    <div className='animation'>
                        <div className='turing_label'>
                            <h1>TURING</h1>
                        </div>
                    </div>
                    <div className='dialogcontent__container'>
                        {(selectedHistory.question !== '' && selectedHistory.answer !==  '')
                            ? <HistoryScreen selectedHistory={selectedHistory}/>
                            : <DialogScreen />
                        }
                    </div>
                    <div className='footer__container'>
                        <img src={info_icon} alt="info icon" />    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
