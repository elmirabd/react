import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(768px - 73px);
    max-height: calc(768px - 73px);
    width: 100%;
    padding: 10px;
    overflow: auto;
`;

function ChatBody({ socket }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("msgsend", data => {
            setMessages(messages => [...messages, data])
        });
    }, []);

    console.log(messages);

    return (
        <Container>
            {
                messages.map((msg, i) => {
                    return(
                        <p key={i}>{ msg.text }</p>
                    )
                })
            }
        </Container>
    );
}

export default ChatBody;


