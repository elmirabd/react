import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//components
import Chat from './Components/Chat';
import Auth from './Components/Auth';
import UserOn from './Components/UserOn';
import UserOff from './Components/UserOff';

const Container = styled.div`
  padding: 50px;
  background-color: #d7d7d7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App(props) {

    return (
        <Container>
            <UserOff location={props.location} exact path="/" component={Auth} />
            <UserOn location={props.location} exact path="/chat" component={Chat} />
        </Container>
    );
}


export default App;


