import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

export const Container = styled.div`
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
    const [date, setDate] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setDate(new Date().getTime())
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function _onLogout() {
        localStorage.removeItem("user");
        getRouterBack();
    }

    return (
        <Container>

            <div className="header" >
               Welcome { user.email }
                { moment(date).format('h:mm:ss a') }
                <a href="https://youtube.com" target="_blank">link</a>
            </div>

            <div className="logout">
                <span onClick={_onLogout}>Logout</span>
            </div>

        </Container>
    );
}

export default withRouter(ChatHeader);


