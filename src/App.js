import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//components
import Chat from './Components/Chat';
import Auth from './Components/Auth';
import UserOn from './Components/UserOn';
import UserOff from './Components/UserOff';
import Dashboard from './Components/Dashbard';

const Container = styled.div`
  background-color: #d7d7d7;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App(props) {

    return (
        <Container>
            <UserOff location={props.location} exact path="/" component={Auth} />
            <UserOn location={props.location} exact path="/chat" component={Chat} />
            <UserOn location={props.location} exact path="/dashboard" component={Dashboard} />
        </Container>
    );
}


export default App;


