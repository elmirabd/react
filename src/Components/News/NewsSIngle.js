import React, {useEffect, useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getNews } from '../../Redux/actions/news';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Block = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: #d7d7d7;

`;


const news = [

]




function NewsSingle({articles, getNews}){

    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [keyword, setKeyword] = useState("");

    useEffect(() =>{
        getNews();
    }, [startDate,keyword]);
    
    function _onchange(e){
        setKeyword(e.target.value);
       
    }
    function filterNews(){
        return function(news){
                let date = new Date(Number(news.date));
                if((startDate === null) || ((date.getDay() === startDate.getDay()) && (date.getMonth() === startDate.getMonth())  && (date.getFullYear() === startDate.getFullYear()))){
                    return news;
                } 
        }
    }

    function filterKeyword(keyword){
        return function(news){
               if(news.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ){
                   return news;
               }
        }
    }

    return(
        <Block>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Default input</label>
            <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                onChange={_onchange}
            />
            </div>
            {
                articles.filter(filterNews()).filter(filterKeyword(keyword)).map((port, i) => {
                    return(

                        <MDBCard style={{ width: "22rem" , margin: "20px"}} key={i}>
                            <MDBCardImage className="img-fluid" src={port.thumb} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{port.title}</MDBCardTitle>
                                <MDBCardText>
                                    {port.content.slice(0, 100) + "..."}
                                </MDBCardText>
                                <MDBBtn><Link to={`/news/${port._id}`} >Etrafli</Link></MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                    );
                })

            }
        </Block>
    );
}

function mapStateToProps(state) {
    return {
        articles: state.news
    }
}

export default connect(mapStateToProps, {getNews})(NewsSingle);