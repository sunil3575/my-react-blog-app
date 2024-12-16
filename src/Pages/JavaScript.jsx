import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './JavaScript.css';

const JavaScript = () => {
  return (
    
    <Container>
    <Row>
        <Col>
<Card className='card'>
    <Card.Img
        variant="top"
        src=
        "https://miro.medium.com/v2/resize:fit:1358/1*bxEkHw1xewxOFjmGunb-Cw.png"
        width={20}
        height={250}
    />
    <Card.Body className='card_body'>
        <Card.Title className='heading' style={{color:"brown",fontSize:"30px"}}>JavaScript</Card.Title>
        <Card.Text style={{color:"black",lineHeight:"2",textAlign:"justify"}}>
            <p className='paragraph'>
            JavaScript is the world most popular
            lightweight, interpreted compiled programming
            language. It is also known as scripting
            language for web pages. It is well-known for
            the development of web pages, many non-browser
            environments also use it. JavaScript can be
            used for Client-side developments as well as
            Server-side developments
            JavaScript is a scripting or programming language that allows you to implement complex
              features on web pages — every time a web page does more than just sit there and display
              static information for you to look at — displaying timely content updates, interactive maps, 
              animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably
               involved. It is the third layer of the layer cake of standard web technologies, two of which 
            (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
            JavaScript is the world most popular
            </p>
        </Card.Text>
       
    </Card.Body>
</Card>
</Col>
    </Row>
</Container>
  )
}

export default JavaScript;
