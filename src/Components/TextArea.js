import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .textarea__wrap {
    position: relative;
    margin-bottom: 50px;
    textarea {
      width: 500px;
      height: 200px;
      border: 1px solid silver;
      border-radius: 5px;
      outline: none;
      padding-bottom: 30px;
    }
    
    .colors {
      position: absolute;
      bottom: 10px;
      left: 20px;
      display: flex;
      div {
        width: 50px;
        height: 50px;
        background-color: silver;
        border-radius: 50%;
        margin-right: 5px;
        cursor: pointer;
      }
    }
    
    button {
      position: absolute;
      bottom: 10px;
      right: 20px;
      padding: 15px;
      background-color: tomato;
      border: none;
      cursor: pointer;
    }
  }
`;


function TextArea({ getDataBack }) {
    const [data, setData] = useState({
        text: "",
        color: "silver"
    });

    function _onChange(e) {
        setData({ ...data, text: e.target.value })
    }
    function _onChangeColor(e, color) {
        setData({ ...data, color })
    }

    function _onClick() {
        getDataBack(data);
        setData({ text: "", color: "silver" })
    }

    return (
        <Container>

            <div className="textarea__wrap">
                <textarea
                    name="textarea"
                    cols="30"
                    rows="10"
                    value={data.text}
                    onChange={_onChange}
                >Placeholder</textarea>

                <div className="colors">
                    <div style={{ backgroundColor: "red" }} onClick={(e) => _onChangeColor(e, "red")} />
                    <div style={{ backgroundColor: "yellow" }} onClick={(e) => _onChangeColor(e, "yellow")} />
                    <div style={{ backgroundColor: "green" }} onClick={(e) => _onChangeColor(e, "green")} />
                </div>

                <button type="button" onClick={_onClick}>ADD NOTE</button>
            </div>

        </Container>
    );
}

export default TextArea;


