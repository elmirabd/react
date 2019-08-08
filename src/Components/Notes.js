import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   
`;

const Note = styled.div`
  padding: 10px;
  height: 100px;
  background-color: ${props => props.color};
`;


function Notes({ data }) {

    return (
        <Container>

            {
                data.map((note, i) => {
                    return(
                        <Note key={i} color={note.color}>
                            <span>{ note.text }</span>
                        </Note>
                    )
                })
            }

        </Container>
    );
}

export default Notes;


