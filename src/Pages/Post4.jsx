import { Card, Col, Container, Row } from "react-bootstrap";

const Post4 = () => {
    return (
        <Container>
            <Row>
          <Col>
        <Card>
            <Card.Img
                variant="top"
                src=
"https://i.ytimg.com/vi/bY5OfBrBg1M/maxresdefault.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title style={{color:"blue"}}>Computer Network</Card.Title>
                <Card.Text style={{color:"blue"}}>
                    An interconnection of multiple devices,
                    also known as hosts, that are connected using
                    multiple paths for the purpose of sending/
                    receiving data media. Computer networks can
                    also include multiple devices/mediums which
                    help in the communication between two different
                    devices; these are known as Network devices
                    and include things such as routers, switches,
                    hubs, and bridges.
                </Card.Text>
                <a href="/aboutcomputernetwork" className="btn btn-success">Read More</a>
            </Card.Body>
        </Card>
        </Col>
            </Row>
        </Container>
    )
}

export default Post4;