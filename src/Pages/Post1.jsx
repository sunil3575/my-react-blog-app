import { Card, Col, Container, Row } from "react-bootstrap";

const Post1 = () => {
    return (
        <Container>
            <Row>
                <Col>
        <Card>
            <Card.Img
                variant="top"
                src=
                "https://miro.medium.com/v2/resize:fit:1358/1*bxEkHw1xewxOFjmGunb-Cw.png"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title style={{color:"brown"}}>JAVASCRIPT</Card.Title>
                <Card.Text style={{color:"brown"}}>
                    JavaScript is the world most popular
                    lightweight, interpreted compiled programming
                    language. It is also known as scripting
                    language for web pages. It is well-known for
                    the development of web pages, many non-browser
                    environments also use it. JavaScript can be
                    used for Client-side developments as well as
                    Server-side developments
                </Card.Text>
                <a href="/aboutjava" className="btn btn-success">Read More</a>
            </Card.Body>
        </Card>
        </Col>
            </Row>
        </Container>
    );
};

export default Post1;