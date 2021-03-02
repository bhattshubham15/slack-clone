import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import slackLogo from '../assets/slack_logo.png'
import { auth, provider } from '../firebase'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <LoginContainer>
            <LoginContainerInner>
                <img src={slackLogo} alt="slack-logo" />
                <h1>Sign In To Slack</h1>
                <p>slack.com</p>
                <Button onClick={signIn}>
                    Sign in with google
                </Button>
            </LoginContainerInner>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const LoginContainerInner = styled.div`
    padding: 100px;
    text-align: center;
    border-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px
    2px rgba(0,0,0,0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;
