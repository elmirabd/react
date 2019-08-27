import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
 import {users} from '../Redux/actions/users';
  import {connect} from 'react-redux'
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
    function _getData(){
     props.users();
console.log(props.userList);
    }
    return (
        <Wrapper>
            {/*<OwnCard />*/}

            <HeaderPanel>
                <button type="button" onClick={_getData}>Get Data</button>
            </HeaderPanel>

            <div className="own-table">
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            props.userList.map((user,i)=>{
                                 return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                  
                                </tr>
                                 )
                        })
                        }




                    </MDBTableBody>
                </MDBTable>
            </div>
        </Wrapper>
    );
}
  function mapStateToProps(state) {
    return {
        userList:state.users
    }

  }

export default connect(mapStateToProps,{users})(Dashbard);