import { Card, Col, Container, Row } from "react-bootstrap";

const Post2 = () => {
    return (
        <Container>
            <Row>
                <Col>
        <Card>
            <Card.Img
                variant="top"
                src=
"https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title style={{color:"green"}}>Data Structure</Card.Title>
                <Card.Text style={{color:"green"}}>
                    The word Algorithm means “a process
                    or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore
                    Algorithm refers to a set of rules/instructions
                    that step-by-step define how a work is to be
                    executed upon in order to get the expected
                    results.
                </Card.Text>
                <a href="/aboutdata" className="btn btn-success">Read More</a>
            </Card.Body>
        </Card>
        </Col>
            </Row>
        </Container>
    )
}

export default Post2;