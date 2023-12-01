import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card  from "react-bootstrap/Card";

import axios from "axios";
import { useEffect, useState } from "react";


function AllMoviesFetch(){
    const [data, setData] = useState([]);

    useEffect(()=>{
       getMovies();
    },[]);

    async function getMovies(){
        try{
            const response = await axios.get('https://bms-backend-22b1fc4fb6f5.herokuapp.com/movies');
            console.log(response.data);
            setData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    return(
            <div>
                <Container>
                    <Row style={{textAlign:"center"}}>
                        {data.map((mov)=>
                        <Col style={{margin: "10px 0"}} xs={6} md={4} lg={3}>
                            <Card onClick={()=>window.location.href="/movies/"+mov._id} style={{cursor:"pointer"}}>
                                    <Card.Img variant="top" src={mov.image_url}/>
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>{mov.actor}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                        )}               
                    </Row>
                </Container>
            </div>
        );
}

export default AllMoviesFetch;