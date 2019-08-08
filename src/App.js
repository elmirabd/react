import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//components
import Notes from './Components/Notes';
import TextArea from './Components/TextArea';

const Container = styled.div`
  padding: 20px;
  background-color: #d7d7d7;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App(props) {
    const [data, setData] = useState([]);

    function getDataBack(values) {
        setData([...data, values])
    }

    console.log(data)

    return (
        <Container>

            <TextArea getDataBack={getDataBack} />

            <Notes data={data} />

        </Container>
    );
}

export default App;


