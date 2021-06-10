
import React from "react"
import {Button, Form, FormControl, Navbar, Nav, ListGroup, Card, Container, Row, Col} from "react-bootstrap"


interface IUserrops{

}

export function LandingComponent(props: any){

    const listItems = ["A", "B", "C"]

    return(
        <>

            <Container fluid>
                <Row>
                    <Col xs = "10">
                        Carousel Here
                    </Col>
                    <Col>
                    <Card style={{height: 'full'}}>
                        <Card>
                        <Card.Header>Friends</Card.Header>
                            <ListGroup className="seacrh=results" variant="flush">
                                {listItems.map(listItems => (
                                    <ListGroup.Item>
                                        {listItems}
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>----------</ListGroup.Item>
                            </ListGroup>
                        </Card> 
                    </Card>
                        
                    </Col>
                </Row>
            </Container>

            {/* <Row className="flex-column">
                <Col md={{ span: 2, offset: 10 }} >
                    <Card>
                    <Card.Header>Friends</Card.Header>
                    <ListGroup className="seacrh=results" variant="flush">
                        {listItems.map(listItems => (
                            <ListGroup.Item>
                                {listItems}
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>----------</ListGroup.Item>
                    </ListGroup>
                    </Card> 
                </Col>
            </Row>

            
            <Card className = "float-sm-right" style={{width: '18rem'}}>
                <Card.Header>Friends</Card.Header>
                <ListGroup className="seacrh=results" variant="flush">
                    {listItems.map(listItems => (
                        <ListGroup.Item>
                            {listItems}
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item>----------</ListGroup.Item>
                </ListGroup>
                
            </Card>  */}
      
        </>
    )
}