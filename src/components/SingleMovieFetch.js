import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card  from "react-bootstrap/Card";
import { useParams } from "react-router";

import axios from "axios";
import { useEffect, useState } from "react";

function SingleMovieFetch(){

    const {movid} = useParams();

    const [data, setData] = useState([]);

    useEffect(()=>{
       getSingleMovies();
    },[]);

    async function getSingleMovies(){
        try{
            const response = await axios.get('https://bms-backend-22b1fc4fb6f5.herokuapp.com/movies/'+movid);
            console.log(response.data);
            setData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <Container>
                    <Row style={{textAlign:"center"}}>
                        
                        <Col style={{margin: "10px 0"}} xs={6} md={4} lg={3}>
                            <Card>
                                    <Card.Img variant="top" src={data.image_url}/>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>{data.actor}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>          
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SingleMovieFetch;