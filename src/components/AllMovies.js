import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card  from "react-bootstrap/Card";
import data from "./movies.json";



function AllMovies(){
    return(
        <div>
            <Container>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov)=>
                    <Col style={{margin: "10px 0"}} xs={6} md={4} lg={3}>
                        <Card onClick={()=>window.location.href="/movies/"+mov.id} style={{cursor:"pointer"}}>
                                <Card.Img variant="top" src={mov.image}/>
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


export default AllMovies;