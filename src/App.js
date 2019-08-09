import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import axios from 'axios';
//components
import Form from './Form';
import View from './View';
//actions
import { getUsers } from './Redux/actions/users';

const Container = styled.div`
  padding: 20px;
  background-color: #d7d7d7;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App(props) {

    useEffect(() => {
        props.getUsers();
    }, [])

    return (
        <Container>

            <Route exact path="/" component={Form} />
            <Route exact path="/view" component={View} />

        </Container>
    );
}


export default connect(null, { getUsers })(App);


