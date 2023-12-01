import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card  from "react-bootstrap/Card";
import data from "./movies.json";
import { useParams } from "react-router";

function SingleMovie(){
    const {movid} = useParams();
    // console.log(movid);
    // console.log(useParams());
    return(
        <div>
            <Container>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov)=> {
                        if(mov.title == movid) {
                            return <Col style={{margin: "10px 0"}} xs={6} md={4} lg={3}>
                            <Card>
                                    <Card.Img variant="top" src={mov.image}/>
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>{mov.actor}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>  
                        }                        
                    }
                    )}               
                </Row>
            </Container>
        </div>
    );
}


export default SingleMovie;