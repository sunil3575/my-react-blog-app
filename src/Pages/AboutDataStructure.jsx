import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './AboutDataStructure.css';


const AboutDataStructure = () => {
  return (
    <Container>
            <Row>
                <Col>
        <Card className='structure_card'>
            <Card.Img
                variant="top"
                src=
"https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title className='heading' style={{color:"black",fontSize:"30px"}}>Data Structure</Card.Title>
                        <Card.Text style={{color:"black",lineHeight:"2",textAlign:"justify"}}>
                    <p className='paragraph'>
                    The word Algorithm means “a process
                    or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore
                    Algorithm refers to a set of rules/instructions
                    that step-by-step define how a work is to be
                    executed upon in order to get the expected
                    results.
                    A data structure is a specialized format for organizing, processing, retrieving and storing data.
                     There are several basic and advanced types of data structures, all designed to arrange data to
                      suit a specific purpose. Data structures make it easy for users to access and work with the data they need. 
                    Most importantly, data structures frame the organization of information so that machines and humans can better understand it.
                    In computer science and computer programming, a data structure might be selected or designed to store data for the
                     purpose of using it with various algorithms -- commonly referred to as data structures and algorithms (DSA). In
                      some cases, the algorithm's basic operations are tightly coupled to the data structure's design. Each data structure contains
                     information about the data values; relationships between the data; and, in some cases, functions that can be applied to the data.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
            </Row>
        </Container>
  )
}

export default AboutDataStructure;
