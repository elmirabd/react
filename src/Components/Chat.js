import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
//components
import ChatHeader from './ChatComponents/ChatHeader';
import ChatBody from './ChatComponents/ChatBody';
import ChatFooter from './ChatComponents/ChatFooter';

const Container = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  width: 75%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
`;

function Chat({ user }) {
    // const [me, setMe] = useState({});
    //
    // useEffect(() => {
    //     setMe(user);
    // }, [user]);

    if (Object.keys(user).length === 0) return (
        <Container>Loading...</Container>
    );

    return (
        <Container>

            <ChatHeader user={user} />

            <ChatBody />

            <ChatFooter />

        </Container>
    );
}

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(Chat);


