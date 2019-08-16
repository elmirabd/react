import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import axios from 'axios';
//components
import Chat from './Components/Chat';
import Auth from './Components/Auth';
import UserOn from './Components/UserOn';
import UserOff from './Components/UserOff';
// actions
// import { getUsers } from './Redux/actions/users';

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
            <UserOff exact path="/" component={Auth} />
            <UserOn exact path="/chat" component={Chat} />
        </Container>
    );
}


export default connect(null)(App);


