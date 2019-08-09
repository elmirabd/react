import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  input, button {
    padding: 5px 10px;
    margin: 10px 0;
  }
`;

function Form(props) {

    console.log(props.users)

    return (
        <Container>

            <Link to="/view">View</Link>

        </Container>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Form);
