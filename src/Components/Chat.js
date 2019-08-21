import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import socketClient from 'socket.io-client';
//components
import ChatHeader from './ChatComponents/ChatHeader';
import ChatBody from './ChatComponents/ChatBody';
import ChatFooter from './ChatComponents/ChatFooter';

let socket = socketClient("http://localhost:4044");

const Container = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 50px);
  width: 75%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
`;

function Chat(props) {
    // const [me, setMe] = useState({});
    //
    useEffect(() => {
        socket.on("start", data => {
            console.log(data);
        })
    }, []);

    if (Object.keys(props.user).length === 0) return (
        <Container>Loading...</Container>
    );

    function getRouterBack() {
        props.history.push("/");
    }

    return (
        <Container>

            <ChatHeader user={props.user} getRouterBack={getRouterBack} />

            <ChatBody socket={socket} user={props.user} />

            <ChatFooter socket={socket} user={props.user} />

        </Container>
    );
}

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(withRouter(Chat));


