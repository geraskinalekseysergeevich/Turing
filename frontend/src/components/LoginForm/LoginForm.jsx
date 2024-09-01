import React, { useState } from 'react';
import classes from './LoginForm.module.css'
import {AuthorizationFetch} from '../../http/controllers/RegAuthController.js'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const saveTokenToCookie = (token) => {
        Cookies.set('jwt_token', token, { 
            expires: 0.5,
            sameSite: true,
            path: '/'
        })
    }

    const authtorizeUser = async () => {
        const response = await AuthorizationFetch(email, password)
        if (response.token) {
            saveTokenToCookie(response.token)
            navigate('/home')
            console.log('Token saved', response.token)
        } else {
            console.log('Authorization failed')
        }
    }

    return (
        <div className={classes.loginform__container}>
            <input 
                className={classes.loginform_input}
                type="email" 
                placeholder='Введите Email'
                value={email}
                onChange={handleChangeEmail}
            />
            <input
                className={classes.loginform_input}
                type="password" 
                placeholder='Введите пароль' 
                value={password}
                onChange={handleChangePassword}
            />
            <button onClick={authtorizeUser}>Войти</button>
        </div>
    );
};

export default LoginForm;