import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarIcon from './components/Sidebar/SidebarIcon';
import DialogScreen from './components/DialogScreen/DialogScreen';
import burger_icon from './static/images/burger_icon.svg'

function App() {

    const [visible, setVisible]  = useState(false)
    const [showTuringTitle, setShowTuringTitle] = useState(true)

    const toggleSidebar  = ()  =>  {
        setVisible(!visible)
    }

    return (
        <div className="App">
            <div className='content__container'>
                <div className={`turing_label ${!showTuringTitle ? 'hide_label' : ''}`}>TURING</div>
                <Sidebar visible={visible} toggleSidebar={toggleSidebar}/> 
                {!visible && 
                    <div style={{position: "absolute", left: "75px", top: "65px"}}>
                        <SidebarIcon icon={burger_icon} toggleSidebar={toggleSidebar}/>
                    </div>
                }
                <div className='page'>
                    <Header />
                    <div className='dialogcontent__container'>
                        <DialogScreen setShowTuringTitle={setShowTuringTitle}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
