import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { getPosts } from './Redux/actions/posts';


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
`;

function View(props) {

    useEffect(() => {
        props.getPosts();
    }, []);

    return (
        <Container>
            View
            <Link to="/">Home</Link>

            {
                props.posts.slice(0, 10).map((post, i) =>
                    <div key={i}>
                        { post.title }
                    </div>
                )
            }
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(View)
