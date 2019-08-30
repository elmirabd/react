import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Container=styled.div`
   margin:40px;
   .imgH {
   display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height:320px;
    }
    .inputFirst{
     outline: none;
     background-color: transparent;
    border: 0px solid;
    height: 20px;
    width: 160px;
   
    font-weight:bold;
    text-align:center;
    }
   
   `;
    const  NewsDetail = (props) => {
         const [data,setData]=useState({
             image:"",
                title:"",
             author:"",
             text:""

         })
         useEffect(() => {
            const {id} = props.match.params;
            setData(props.news.filter(n => n._id === id)[0])

         } ,[])
console.log(data);

          return  (
              <Container>

                 <img src={data.thumb} alt="news" name="imgName" className="imgH"/> <br/> <br/>
                  <p> {data.title} </p>
                  <p> {data.author} </p>
                  <br/> <br/>
                  <p>
                      {data.content}
</p>
                  <Link to="/news"> Back </Link>
              </Container>


          )
    }

    function mapStateToProps(state){
        return{
            news: state.news
        }
    }

export default connect(mapStateToProps)(NewsDetail);