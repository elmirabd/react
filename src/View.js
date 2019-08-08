import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';


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
`;

function View() {

    return (
        <Container>
            View
            <Link to="/">Home</Link>
        </Container>
    );
}

export default View;
