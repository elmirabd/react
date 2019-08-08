import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function Form({ getDataFromForm }) {
    const [data, setData] = useState({
        name: "",
        age: ""
    });

    const nameInput = useRef(null);

    useEffect(() => {

        const a = setInterval(() => { console.log('interval') }, 1000)

        return () => {
            clearInterval(a)
        }
    }, [data]);

    function _onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function _onClick(e, val) {
        // console.log(data);
        getDataFromForm(data);
    }



    return (
        <Container>

            <input type="text" name="name" value={data.name} onChange={_onChange} ref={nameInput} />

            <input type="text" name="age" value={data.age} onChange={_onChange} />

            <button type="button" onClick={_onClick}>
                Send
            </button>

            <br />

            <Link to="/view">View</Link>

        </Container>
    );
}

export default Form;
