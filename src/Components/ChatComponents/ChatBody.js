import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(768px - 73px);
    max-height: calc(768px - 73px);
    width: 100%;
    padding: 30px;
    overflow: auto;
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
`;

function ChatBody({ socket, user }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit("getHistory", {});

        socket.on("history", data => {
           setMessages(data);
        });

        socket.on("msgsend", data => {
            setMessages(messages => [...messages, data])
        });
    }, []);

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {
                    messages.map((msg, i) => {
                        if (msg.author === user.email) {
                            return(
                                <div key={i} style={{ display: "flex", flexDirection: "row-reverse" }}>
                                    <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-end" }}>
                                        <span>{ msg.message }</span>
                                        <p style={{ fontSize: "12px", color: "silver" }}>{ msg.author }</p>
                                    </div>
                                </div>
                            )
                        }
                        return(
                            <div key={i}>
                                <p style={{ fontSize: "12px", color: "silver" }}>{ msg.author }</p>
                                <span>{ msg.message }</span>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    );
}

export default ChatBody;


