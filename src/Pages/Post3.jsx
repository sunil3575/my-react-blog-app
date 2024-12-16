import { Card, Col, Container, Row } from "react-bootstrap";

const Post3 = () => {
    return (
        <Container>
            <Row>
                <Col>
        <Card>
            <Card.Img
                variant="top"
                src=
"https://d15cw65ipctsrr.cloudfront.net/5e/41de00794811e682cb918e3e406e4d/cs161logo.png"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title style={{color:"rebeccapurple"}}>Algorithm</Card.Title>
                <Card.Text style={{color:"rebeccapurple"}}>
                    The word Algorithm means “a process
                    or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore
                    Algorithm refers to a set of rules/instructions
                    that step-by-step define how a work is to be
                    executed upon in order to get the expected
                    results.
                </Card.Text>
                <a href="/aboutalgorithm" className="btn btn-success">Read More</a>
            </Card.Body>
        </Card>
        </Col>
            </Row>
        </Container>
    )
}

export default Post3;