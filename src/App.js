import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsDetail from './Components/News/newsDetail';
 import Form from './Components/News/Form';
import newsDetail from './Components/News/newsDetail';
import newsSingle from './Components/News/NewsSIngle';
import { Route ,Switch} from 'react-router-dom';

//components
import Chat from './Components/Chat';
import Auth from './Components/Auth';
import UserOn from './Components/UserOn';
import UserOff from './Components/UserOff';
import Dashboard from './Components/Dashbard';
import Navbar from './Components/Dashboard/Navbar';
import Sidenav from './Components/Dashboard/Sidenav';

const Container = styled.div`
 
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



  <Route exact path="/form" component={Form} />
   <Switch>


       <Route exact  path="/news" component={newsSingle} />
       <Route  path="/news/:id" component={newsDetail} />
   </Switch>


        </Container>
    );
}


export default App;


