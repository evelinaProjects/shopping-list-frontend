import React, { useContext, useState, useReducer } from 'react';

import './SignForm.css'
import Input from '../shared/Input';
import Button from '../shared/Button';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { SignFormReducer } from '../reducers/SignFormReducer';

import ImageInput from '../shared/ImageInput';

import Axios from 'axios';

const SignForm = ({ setIsLogin }) => {
    const { isDark } = useContext(DarkModeContext);
    const [isSignup, setIsSignup] = useState(true);
    const [formState, dispatchFormState] = useReducer(SignFormReducer, {
        image: '',
        name: '',
        email: '',
        password: ''
    });

    const switchSignup = () => {
        setIsSignup(!isSignup);
    }

    const usernameHandler = event => {
        dispatchFormState({ type: 'NAME', name: event.target.value });
    }

    const emailHandler = event => {
        dispatchFormState({ type: 'EMAIL', email: event.target.value });
    }

    const passwordHandler = event => {
        dispatchFormState({ type: 'PASSWORD', password: event.target.value });
    }

    const singupHandler = event => {
        event.preventDefault();

        Axios.post('http://localhost:3001/users/signup', {
            name: formState.name,
            email: formState.email,
            password: formState.password,
            image: formState.image
        }).then((response) => {
            console.log(response.data.user);
            setIsLogin(true);

        }).catch(error => {
            console.log(error);
        })

        event.target.reset();

    }

    const singinHandler = event => {
        event.preventDefault();
        Axios.post('http://localhost:3001/users/signin', {
            email: formState.email,
            password: formState.password,
        }).then((response) => {
            console.log(response.data.user);
            setIsLogin(true);
        }).catch(error => {
            console.log(error);
        })

        event.target.reset();
    }

    return (
        <>
        <form className="signup-form" onSubmit={isSignup ? singupHandler : singinHandler}>
            {isSignup ? <>
                <ImageInput formState={formState} dispatchFormState={dispatchFormState} />
                <Input type={'text'} value={'Username'} typeitemHandler={usernameHandler} mode={isDark ? 'dark' : ''} />
            </> : ''}
            <Input type={'email'} value={'E-mail'} typeitemHandler={emailHandler} mode={isDark ? 'dark' : ''} />
            <Input type={'password'} value={'Password'} typeitemHandler={passwordHandler} mode={isDark ? 'dark' : ''} />

            <br />
            <Button value={isSignup ? 'SIGN UP' : 'SIGN IN'} mode={isDark ? 'dark' : ''} />
        </form>
            <Button value={isSignup ? 'have an accont' : 'create an acount'} handler={switchSignup} buttonType={'button'} mode={isDark ? 'dark' : ''} />
            </>
    );
}

export default SignForm;