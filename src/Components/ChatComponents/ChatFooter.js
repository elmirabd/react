import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
  .inp {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      padding: 10px 150px 10px 20px;
      background-color: #d7d7d7;
      border: 1px solid silver;
    }
    button {
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 5px;
      width: 100px;
      border: 1px solid gray;
    }
  }
`;

function ChatFooter({ socket }) {
    const [text, setText] = useState({
        text: ""
    });

    function _onChange(e) {
        setText({ text: e.target.value })
    }

    function _onSend() {
        socket.emit("msg", text)
    }

    return (
        <Container>
            <div className="inp">
                <input type="text" placeholder="Text daxil edin..." onChange={_onChange} value={text.text} />
                <button type="button" onClick={_onSend}>SEND</button>
            </div>
        </Container>
    );
}

export default ChatFooter;


