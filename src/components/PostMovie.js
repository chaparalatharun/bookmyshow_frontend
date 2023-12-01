import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Swal from 'sweetalert2';

function PostMovie(){
    const [imageurl,setImageUrl] = useState("");
    const [title,setTitle] = useState("");
    const [actor, setActor] = useState("");

    function clearInput(){
        setImageUrl("");
        setActor("");
        setTitle("");
    }

    async function MoviePost(){
        console.log(imageurl,title,actor);
        const data = {
            "title": title,
            "actor": actor,
            "image_url": imageurl
        }
        await axios.post('https://bms-backend-22b1fc4fb6f5.herokuapp.com/movies/', data).then(function (response) {
            console.log(response);
            clearInput();
            Swal.fire({
                position: "top",
                icon: "success",
                title: "new movie is added",
                showConfirmButton: false,
                timer: 15000
            });
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
                position: "top",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 15000
            });
          });
    }
    
    return(
        <div style={{display:"flex", justifyContent:"space-around",alignItems:"center",marginTop:"10px"}}>
            <div style={{margin: "10px 0", width:"50%",alignContent:"center"}}>
                <Form.Control value={imageurl} onChange={(e)=> setImageUrl(e.target.value)} style={{borderColor: "red"}} size="lg" type="text" placeholder="image_url" />
                <br />
                <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} style={{borderColor: "red"}} size="lg" type="text" placeholder="title" />
                <br />
                <Form.Control value={actor} onChange={(e)=> setActor(e.target.value)} style={{borderColor: "red"}} size="lg" type="text" placeholder="actor" />
                <br />
                <Button onClick={MoviePost} variant="primary">click to save</Button>
            </div>
            <div style={{ display:"flex", justifyContent:"center"}}>
                <Card>
                    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src={imageurl} alt='no valid image address' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{actor}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default PostMovie;