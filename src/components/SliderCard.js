import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

function SliderCard() {
  return (
    <div style={{marginTop: "100px", marginBottom: "100px", padding:"5%", background:"grey"}}>
        <Carousel indicators={false} fade variant='light'>
        <Carousel.Item>
            <CardGroup>
                <Card className="bg-dark text-white" style={{borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>              
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup>
            <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>         
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup>
                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{borderRadius:"10px",display:"flex", alignItems:"center", justifyContent:"center", height:"200px", width: "300px", margin: "0px 10px"}}>
                    <Card.Img style={{height:"200px", width:"200px"}} src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>         
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderCard;