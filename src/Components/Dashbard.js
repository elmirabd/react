import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// components
import OwnCard from './Dashboard/OwnCard';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



const Wrapper = styled.div`
  .own-table {
    padding: 10px;
    background-color: white;
  }
`;

const HeaderPanel = styled.div`
  padding: 10px;
  width: 100%;
  button {
    padding: 10px 20px;
    outline: none;
    border: 1px solid black;
    color: black;
  }
`;

function Dashbard(props) {
    return (
        <Wrapper>
            {/*<OwnCard />*/}

            <HeaderPanel>
                <button type="button">Get Data</button>
            </HeaderPanel>

            <div className="own-table">
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </Wrapper>
    );
}

export default Dashbard;