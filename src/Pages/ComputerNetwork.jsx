import React from 'react'
import './ComputerNetwork.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const ComputerNetwork = () => {
  return (
    <Container>
    <Row>
  <Col>
<Card className='network_card'>
    <Card.Img
        variant="top"
        src=
"https://i.ytimg.com/vi/bY5OfBrBg1M/maxresdefault.jpg"
        width={20}
        height={250}
    />
    <Card.Body>
        <Card.Title className='heading' style={{color:"blue",fontSize:"30px"}}>Computer Network</Card.Title>
        <Card.Text style={{color:"black",lineHeight:"2",textAlign:"justify"}}>
            <p className='paragraph'>
            An interconnection of multiple devices,
            also known as hosts, that are connected using
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can
            also include multiple devices/mediums which
            help in the communication between two different
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges.
            The first working network, called ARPANET, was created in the late 1960s and was funded by the U.S. 
            Department of Defense. Government researchers used to share information at a time when computers were 
            large and difficult to move. We have come a long way today from that basic kind of network. Today’s 
            world revolves around the internet, which is a network of networks that connects billions of devices across the world. 
            Organizations of all sizes use networks to connect their employees’ devices and shared resources such as printers.
            </p>
        </Card.Text>
    </Card.Body>
</Card>
</Col>
    </Row>
</Container>
  )
}

export default ComputerNetwork;
