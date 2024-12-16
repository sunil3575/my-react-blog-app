import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import { Container, Row, Col, Card } from 'react-bootstrap';


const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-between">
                <Col md={8} className="mb-4 mt-4">
                    <Post1/>
                </Col>
               
                <Col md={3} className="mt-4">
                <div style={{}}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{fontSize:"40px", color:"blue"}}>Recent Posts</Card.Title>
                            <ul className="list-unstyled" style={{fontSize:"larger"}}>
                                <li ><a href="/aboutjava" style={{textDecoration:"none", color:"green"}}>JavaScript</a></li>
                                <li style={{color:"red"}}><a href="/aboutdata" style={{textDecoration:"none",color:"green"}}>Data Structure</a></li>
                                <li><a href="/aboutalgorithm" style={{textDecoration:"none",color:"green"}}>Algorithm</a></li>
                                <li><a href="/aboutcomputernetwork" style={{textDecoration:"none", color:"green"}}>Computer Network</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
                <Col md={8} className="mb-4">
                    <Post2 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post3 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post4 />
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;