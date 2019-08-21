import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 30px 10px;
  span {
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid silver;
  }
`;

function ChatHeader({ user, getRouterBack }) {

    function _onLogout() {
        localStorage.removeItem("user");
        getRouterBack();
    }

    return (
        <Container>

            <div className="header">
               Welcome { user.email }
            </div>

            <div className="logout">
                <span onClick={_onLogout}>Logout</span>
            </div>

        </Container>
    );
}

export default withRouter(ChatHeader);


