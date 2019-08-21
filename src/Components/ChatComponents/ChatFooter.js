import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
   padding-top: 35px;
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

function ChatFooter({ socket, user }) {
    const [typingList, setTypingList] = useState([]);
    const [text, setText] = useState({
        text: ""
    });

    useEffect(() => {
        socket.on("typing", arrayOfUsers => {
            setTypingList(arrayOfUsers);
        })
    }, []);

    function _onChange(e) {
        setText({ text: e.target.value });
        socket.emit("typing", {
            email: user.email, text: text.text
        })
    }

    function _onSend() {
        if (text.text === "") {
            return false;
        }
        const data = {
            message: text,
            user: user
        };
        socket.emit("msg", data);
        setText({ text: "" })
    }

    return (
        <Container>
            <div>
                {
                    typingList.length !== 0 &&
                    (typingList.length > 1 ? <p>Users are typing...</p> : <p>{typingList[0]} is typing</p>)
                }
            </div>
            <div className="inp">
                <input type="text" placeholder="Text daxil edin..." value={text.text} onChange={_onChange} />
                <button type="button" onClick={_onSend}>SEND</button>
            </div>
        </Container>
    );
}

export default ChatFooter;


