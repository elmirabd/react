import React, {useEffect, useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getNews } from '../../Redux/actions/news';


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

    useEffect(() =>{

        getNews();

        
    }, []);
    
    return(
        <Block>
            {
                articles.map((port, i) => {
                    return(

                        <MDBCard style={{ width: "22rem" , margin: "20px"}}>
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