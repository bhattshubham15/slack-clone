import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const Chatinput = ({ chatRef, channelName, channelId }) => {
    const [input, setInput] = useState('')
  const [user, loading] = useAuthState(auth)
    const sendMessage = (e) => {
        e.preventDefault()
        if (!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            messages: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        })
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        })
        setInput('')
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <ChatInputContainer>
            <form>
                <input onChange={handleChange} value={input} type="text" placeholder={`Message ${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default Chatinput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`;
