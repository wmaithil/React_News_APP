
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import NewsCard from './NewsCard';

import {Container,Row,Col,Button} from 'reactstrap';


const LoadData= () => {

    const [details,setDetails]=useState({});
    const [count, setCount] =useState(1);

    const API_KEY ="1905de9b24cc4e32ac89c7af3f8caff2";
    const url_address=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const fetchData= async () => {
        
        const {data}= await Axios.get(url_address,{params: {_limit: 10} });
        
        const {articles}=data
        console.log(articles[count])
        console.log(count)
        setDetails(articles[count])
    };
    const loadnewdata= ()=>{
        setDetails(details[count])
    }
    useEffect(()=>{
        fetchData()
        console.log("1")
    },[]);

    return(
        <Container fluid >
            <h1> Reading {count}th News</h1>
            
            <Row>
            <Col md="6">
    
                <NewsCard details={ details}/>
            
            </Col>
            <Col md="6" className="mt-2">
                <span>
                    {details.description}
                    </span>

                    <div className="mt-3 ">
                    
                    <Button color="primary" onclick={ ()=> count<1? "": ( setCount(count-1) ) } className="m-2">
                        Prev
                    </Button>
                    <Button color="primary" onclick={()=> count>9? (setCount(count+1)):""}>
                        Next</Button>
                    </div>
                    
            </Col>
            </Row>
           
        </Container>

    );

};

export default LoadData;