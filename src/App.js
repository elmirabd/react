import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
//components
import Chat from './Components/Chat';
import Auth from './Components/Auth';
import UserOn from './Components/UserOn';
import UserOff from './Components/UserOff';
import Dashboard from './Components/Dashbard';
import Navbar from './Components/Dashboard/Navbar';
import Sidenav from './Components/Dashboard/Sidenav';

const Container = styled.div`
  background-color: #d7d7d7;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const Left = styled.div`
  width: 300px;
`;

function App(props) {

    return (
        <Container>

        {/*<Left>*/}
        {/*    <Sidenav />*/}
        {/*</Left>*/}

        <Content>
            <Navbar />
            <Route location={props.location} exact path="/" component={Dashboard} />
        </Content>


            {/*<UserOff location={props.location} exact path="/" component={Auth} />*/}
            {/*<UserOn location={props.location} exact path="/chat" component={Chat} />*/}

        </Container>
    );
}


export default App;


