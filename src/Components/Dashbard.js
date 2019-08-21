import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//navbar
import Navbar from './Dashboard/Navbar';
import Sidenav from './Dashboard/Sidenav';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Left = styled.div`
  width: 300px;
`;

function Dashbard(props) {
    return (
        <Wrapper>
            <Left>
                <Sidenav />
            </Left>
            <Content>
                <Navbar />
            {/*  component  */}
            </Content>
        </Wrapper>
    );
}

export default Dashbard;