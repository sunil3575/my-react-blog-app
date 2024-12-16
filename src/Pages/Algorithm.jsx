import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Algorithm.css';

const Algorithm = () => {
  return (
    <Container>
            <Row>
                <Col>
        <Card className='algo_card'>
            <Card.Img
                variant="top"
                src=
"https://d15cw65ipctsrr.cloudfront.net/5e/41de00794811e682cb918e3e406e4d/cs161logo.png"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title className='heading' style={{color:"rebeccapurple",fontSize:"30px"}}>Algorithm</Card.Title>
                        <Card.Text style={{color:"black",lineHeight:"2",textAlign:"justify"}}>
                                                    <p className='paragraph'>
                    The word Algorithm means “a process
                    or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore
                    Algorithm refers to a set of rules/instructions
                    that step-by-step define how a work is to be
                    executed upon in order to get the expected
                    results.
                    The current term of choice for a problem-solving procedure, algorithm, is commonly used
                     nowadays for the set of rules a machine (and especially a computer) follows to achieve 
                     a particular goal. It does not always apply to computer-mediated activity, however. The term may as accurately
                     be used of the steps followed in making a pizza or solving a Rubik’s Cube as for computer-powered data analysis.
                     Algorithm is often paired with words specifying the activity for which a set of rules have been designed.
                      A search algorithm, for example, is a procedure that determines what kind of information is retrieved from
                       a large mass of data. An encryption algorithm is a set of rules by which information or messages are
                        encoded so that unauthorized persons cannot read them.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
            </Row>
        </Container>
  )
}

export default Algorithm;
