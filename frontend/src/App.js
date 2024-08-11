import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarIcon from './components/Sidebar/SidebarIcon';
import DialogScreen from './components/DialogScreen/DialogScreen';
import burger_icon from './static/images/burger_icon.svg'
import info_icon from './static/images/info_icon.svg';
import {Tooltip} from 'react-tooltip';
import data from './static/fields/data.json';
import BgAnimation from './components/BgAnimation/BgAnimation';
import {getAllUserDialogs} from './http/index.js';
import { getDialogById } from './http/index.js';
import SearchField from './components/SearchField/SearchField.jsx';
import { sendMessage, createNewDialog } from './http/index.js';
import MessagePair from './components/MessagePair/MessagePair.jsx';

function App() {

    const endOfMessagesRef = useRef(null)
    const [visibleSidebar, setVisibleSidebar]  = useState(false)
    const [visibleTuring, setVisibleTuring] = useState(true)
    const [historyVisible, setHistoryVisible] = useState(false)

    const [userDialogs, setUserDialogs] = useState([])
    const [history, setHistory] = useState([])
    const [messages, setMessages] = useState([])
    const [dialogId, setDialogId] = useState(null)

    const scrollToBottom = () => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [history])

    const toggleSidebar  = ()  =>  {
        setVisibleSidebar(!visibleSidebar)
    }

    const getDialogHistory = async (dialogId) => {
        const data = await getDialogById(dialogId)
        setHistoryVisible(true)
        setHistory(data)
        toggleSidebar()
        setVisibleTuring(false)
    }

    const resetStates = () => {
        window.location.reload()
    }

    const fetchDialogs = async () => {
        const data = await getAllUserDialogs()
        setUserDialogs(data)
    }

    useEffect(() => {
        fetchDialogs()
    }, [])

    const sendMessageFetch = async (messageText) => {
        setVisibleTuring(false)
        if (!dialogId) {
            setHistoryVisible(false)
            const newDialogData = await createNewDialog()
            setDialogId(newDialogData.id)
            const data = await sendMessage(newDialogData.id, messageText)
            setMessages([...messages, data])
        } else {
            setHistoryVisible(true)
            const data = await sendMessage(dialogId, messageText)
            setMessages([...messages, data])
        }
    }

    return (
        <div className="App">
            <BgAnimation visibleTuring={visibleTuring}/>
            <div className='content__container'>
                <Sidebar 
                    visible={visibleSidebar} 
                    toggleSidebar={toggleSidebar}
                    getHistoryFunction={getDialogHistory}
                    userDialogs={userDialogs}
                    setActiveDialog={setDialogId}
                /> 
                {!visibleSidebar && 
                    <div style={{position: "absolute", left: "75px", top: "65px", zIndex: 10}}>
                        <SidebarIcon icon={burger_icon} onCLickFunction={toggleSidebar}/>
                    </div>
                }
                <div className='page'>
                    <Header resetStates={resetStates}/>
                    <div className='dialogcontent__container'>
                        <div className='scroll_container'>
                            <div className='test'>
                                {historyVisible &&
                                    history.map((item) => (
                                        <MessagePair key={item.id}
                                            questionText={item.question.text}
                                            answerText={item.answer.text}
                                        />
                                    ))
                                }
                            </div>
                            <DialogScreen
                                messages={messages} 
                                animated={true}
                            />
                            <div ref={endOfMessagesRef} />
                        </div>
                        <SearchField sendFunction={sendMessageFetch}/>
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
