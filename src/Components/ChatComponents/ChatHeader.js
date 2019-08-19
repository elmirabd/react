import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
`;

function ChatHeader({ user, text }) {

    console.log(user);
    console.log(text);

    return (
        <Container>

            <div className="header">
               Welcome { user.email }
            </div>

        </Container>
    );
}

export default ChatHeader;


