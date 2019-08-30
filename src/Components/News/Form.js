import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import validator from "validator";
import axios from 'axios';
import {connect} from 'react-redux';
import {postNews} from '../../Redux/actions/news'
//components

const Container = styled.div`
margin-top:20px;
`;

function Form(props) {

    const [data,setData] = useState({
        author:"",
        title:"",
        thumb:"",
        content:""
    });

    const [errors, setErrors] = useState({});

    function _onChange(e) {
        setData({...data,[e.target.name]: e.target.value});
    }

    function validate(state) {
        let error = {};

        if (validator.isEmpty(state.author)) error.author = "Author is required";
        if (validator.isEmpty(state.title)) error.title = "Title is required";
        if (validator.isEmpty(state.thumb)) error.thumb = "Thumb is required";
        if (validator.isEmpty(state.content)) error.content = "Content is required";

        return error;
    }


    async function _onClick(e) {
        const allErrors = validate(data);
        setErrors(allErrors);

        if(Object.keys(allErrors).length == 0){
            console.log(data);
            await  props.postNews(data);
        }
    }


    return (
        <Container>

            <div className={"container"}>
                <div className="col-md-8">
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={_onChange} name={"author"} id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter Author" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={_onChange}  name={"title"} id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={_onChange}  name={"thumb"} id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter Image src" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Content</label>
                        <textarea className="form-control" onChange={_onChange}  id="exampleFormControlTextarea1" rows="3" name={"content"}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={_onClick}>Create</button>

                    <Link to="/news" >News Page</Link>
                </div>
            </div>

        </Container>
    );
}


export default connect(null, {postNews})(Form);