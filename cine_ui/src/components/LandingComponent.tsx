
import React from "react"
import {ListGroup, Card, Container, Row, Col, Carousel} from "react-bootstrap"


interface IUserrops{

}

export function LandingComponent(props: any){

    const listItems = ["A", "B", "C"]

    return(
        <>

            <Container fluid>
                <Row>
                    <Col xs = "10">
                                <Card>
                                    <Carousel>
                                    <Carousel.Item>
                                        test Item 1-1
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        test Item 1-2
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        test Item 1-3
                                    </Carousel.Item>
                                    </Carousel>
                                </Card>
                                <br/>
                                <Card>
                                    <Carousel>
                                    <Carousel.Item>
                                        test Item 2-1
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        test Item 2-2
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        test Item 2-3
                                    </Carousel.Item>
                                    </Carousel>
                                </Card>


                    </Col>
                    <Col>
                    <Card style={{height: '50em'}}>
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
      
        </>
    )
}