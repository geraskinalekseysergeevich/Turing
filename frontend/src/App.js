import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { getTokenFromCookie } from './utils/CookieHelper';
import Cookies from 'js-cookie';


function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Cookies.get('jwt_token') ? <MainPage /> : <Navigate to='/login' />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
