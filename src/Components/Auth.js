import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import validator from 'validator';
import { connect } from 'react-redux';
// actions
import { register, enter } from '../Redux/actions/users';


const Container = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  width: 75%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
  
  .logo-wrap {
    img {
      width: 500px;
    }
  }
  
  .form {
    display: flex;
    flex-direction: column;
    label {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 5px;
      }
      input {
        padding: 10px;
        outline: none;
        width: 300px;
        border: 1px solid ${props => Object.keys(props.error).length !== 0 ? "tomato" : "silver"};
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
        button {
          margin: 10px 0;
          padding: 10px;
          outline: none;
          border: 1px solid silver;
          background-color: #0a3d62;
          color: white;
          cursor: pointer;
          &:first-child { width: 200px; }  
          &:last-child { width: 95px; } 
        }
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

    async function _onClick(type) {
      const allErrors = validate(data);
      setErrors(allErrors);

      try {

          if (Object.keys(allErrors).length === 0) {
              //api request
              if (type === "signup") {
                  await props.register(data);
              } else {
                  await props.enter(data);
              }
          }

      } catch(err) {
          setErrors({ enter: err.response.data.errors.global })
      }

    }

    function validate(state) {
        let error = {};

        if (!validator.isEmail(state.email)) error.email = "Email is not correct";
        if (!validator.isLength(state.pass, { min: 3, max: 9 })) error.pass = "Password is not correct";

        return error;
    }

    return (
        <Container error={errors}>

            <div className="logo-wrap">
                <img src={require("../Media/chatlogo.jpg")} alt="chat-logo" />
            </div>

            <div className="form">
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="email" name="email" value={data.email} onChange={_onChange} id="email" />
                </label>

                <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" name="pass" value={data.pass} onChange={_onChange} id="password" />
                </label>

                <div className="buttons">
                    <button type="button" onClick={() => _onClick("signin")}>
                        SIGN IN
                    </button>

                    <button type="button" onClick={() => _onClick("signup")}>
                        SIGN UP
                    </button>
                </div>
            </div>

        </Container>
    );
}

export default connect(null, { register, enter })(Auth);
