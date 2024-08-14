import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarIcon from './components/Sidebar/SidebarIcon';
import DialogScreen from './components/DialogScreen/DialogScreen';
import burger_icon from './static/images/burger_icon.svg'
import info_icon from './static/images/info_icon.svg';
import { Tooltip } from 'react-tooltip';
import data from './static/fields/data.json';
import BgAnimation from './components/BgAnimation/BgAnimation.jsx';
import SearchField from './components/SearchField/SearchField.jsx';
import MessagePair from './components/MessagePair/MessagePair.jsx';
import { CreateNewDialogFetch, GetAllUserDialogsFetch } from './http/controllers/DialogsController.js';
import { GetDialogByIdFetch } from './http/controllers/HistoryController.js';
import { PostMessageFetch } from './http/controllers/MessageController.js';
import HotButtons from './components/HotButtons/HotButtons.jsx';

function App() {

    const endOfMessagesRef = useRef(null)
    const [visibleSidebar, setVisibleSidebar]  = useState(false)
    const [visibleHomePage, setVisibleHomePage] = useState(true)
    const [historyVisible, setHistoryVisible] = useState(false)

    const [userDialogs, setUserDialogs] = useState([])
    const [history, setHistory] = useState([])
    const [messages, setMessages] = useState([])
    const [dialogId, setDialogId] = useState(null)
    const [textFromHotButton, setTextFromHotButton] = useState('')

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

    const fetchDialogHistory = async (dialogId) => {
        setVisibleHomePage(false)
        toggleSidebar()
        const data = await GetDialogByIdFetch(dialogId)
        setHistoryVisible(true)
        setMessages([])
        setHistory(data)
    }

    const reloadPage = () => {
        window.location.reload()
    }

    const fetchAllUserDialogs = async () => {
        const data = await GetAllUserDialogsFetch()
        setUserDialogs(data)
    }

    useEffect(() => {
        fetchAllUserDialogs()
    }, [])

    const sendMessage = async (messageText) => {
        setVisibleHomePage(false)
        if (!dialogId) {
            setHistoryVisible(false)
            const newDialogData = await CreateNewDialogFetch()
            setDialogId(newDialogData.id)
            const data = await PostMessageFetch(newDialogData.id, messageText)
            setMessages([...messages, data])
        } else {
            setHistoryVisible(true)
            const data = await PostMessageFetch(dialogId, messageText)
            setMessages([...messages, data])
        }
    }

    return (
        <div className="App">
            <BgAnimation visibleTuring={visibleHomePage}/>
            <div className='content__container'>
                <Sidebar 
                    visible={visibleSidebar} 
                    toggleSidebar={toggleSidebar}
                    getHistoryFunction={fetchDialogHistory}
                    userDialogs={userDialogs}
                    setActiveDialog={setDialogId}
                /> 
                {!visibleSidebar && 
                    <div style={{position: "absolute", left: "75px", top: "65px", zIndex: 10}}>
                        <SidebarIcon icon={burger_icon} onCLickFunction={toggleSidebar}/>
                    </div>
                }
                <div className='page'>
                    <Header resetStates={reloadPage}/>
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
                        <HotButtons 
                            setTextFromHotButton={setTextFromHotButton} 
                            visibleHotButtons={visibleHomePage}
                        />
                        <SearchField 
                            textFromHotButton={textFromHotButton} 
                            setTextFromHotButton={setTextFromHotButton}
                            sendFunction={sendMessage} 
                        />
                    </div>
                    <div className='footer__container'>
                        <img src={info_icon} alt="info icon" className='tooltip_hover_element' />
                        <Tooltip 
                            anchorSelect=".tooltip_hover_element" 
                            place="top-end" 
                            noArrow={true}
                            className='tooltip__container'
                            content={data.tooltipText}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
