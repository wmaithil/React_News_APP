
import React from 'react';
import {Card,CardBody,CardImg, CardTitle, CardText, CardFooter} from 'reactstrap';

const NewsCard = ({details}) =>{
    return(
        
        <Card>
            <CardImg src={details.urlToImage} className="mt-2" height="300" width="30%"/>
            <CardBody className="text-center  mt-1">
            <CardTitle>
                    {details.title}
            </CardTitle>
            
            <CardText>
                {details.source?.name}
            </CardText>

            </CardBody>
            <CardFooter>
            <a href={details.url}>Read Full Artile Here!</a>
            </CardFooter>
        </Card>
        
            
    );
} ;

export default NewsCard;