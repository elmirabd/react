import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import axios from 'axios';
//components
import Form from './Components/Form';
import View from './Components/View';
import Auth from './Components/Auth';
import UserOn from './Components/UserOn';
import UserOff from './Components/UserOff';
// actions
// import { getUsers } from './Redux/actions/users';

const Container = styled.div`
  padding: 20px;
  background-color: #d7d7d7;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App(props) {

    return (
        <Container>
            <UserOff exact path="/" component={Auth} />
            <UserOn exact path="/form" component={Form} />
            <UserOn exact path="/view" component={View} />
        </Container>
    );
}


export default connect(null)(App);


