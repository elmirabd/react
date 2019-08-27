import React, {useEffect, useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Block = styled.div`
display: flex;
flex-wrap: wrap;

`;


const news = [

]




function NewsSingle(){

    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('/api/get-articles' ).then(res  =>{

            console.log(res)
            setData(res.data.articles);
        })
    }, []);

    console.log(data);

    return(
        <Block>
            {
                data.map((port, i) => {
                    return(

                        <MDBCard style={{ width: "22rem" , marginLeft: "50px"}}>
                            <MDBCardImage className="img-fluid" src={port.thumb} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{port.title}</MDBCardTitle>
                                <MDBCardText>
                                    {port.content}
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

export default NewsSingle;