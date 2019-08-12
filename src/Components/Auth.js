import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import validator from 'validator';
import { connect } from 'react-redux';
// actions
import { register } from '../Redux/actions/users';


const Container = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 700px;
  
  .form {
    display: flex;
    flex-direction: column;
    label {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
    }
    button {
      margin: 10px 0;
    }
  }
`;


function Auth(props) {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        email: "",
        pass: ""
    });

    function _onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function _onClick() {
      const allErrors = validate(data);

      try {

          if (Object.keys(allErrors).length === 0) {
              //api request
              console.log(data)
              await props.register(data);
          }

      } catch(err) {
          console.log(err)
      }

    }

    function validate(state) {
        let error = {};

        if (!validator.isEmail(state.email)) error.email = "Email is not correct";
        if (!validator.isLength(state.pass, { min: 3, max: 9 })) error.pass = "Password is not correct";

        return error;
    }

    return (
        <Container>

            <div className="form">
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="email" name="email" value={data.email} onChange={_onChange} id="email" />
                </label>

                <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" name="pass" value={data.pass} onChange={_onChange} id="password" />
                </label>

                <button type="button" onClick={_onClick}>
                    SIGN IN
                </button>
            </div>

        </Container>
    );
}

export default connect(null, { register })(Auth);
