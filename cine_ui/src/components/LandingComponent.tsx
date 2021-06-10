
import React from "react"
import {ListGroup, Card, Container, Row, Col, Carousel} from "react-bootstrap"

//TODO: Setup interface to take a created User property
interface IUserrops{

}

export function LandingComponent(props: any){

    const listItems = ["A", "B", "C"]

    const fakeMovieList = ["movie1", "movie2", "movie3"]

    //TODO: Change these values to match the user's values
    return(
        <>

            <Container fluid>
                <Row>
                    <Col xs = "10">
                        <br/>
                        <Card>
                            <Card.Header>Movies To Watch List</Card.Header>
                                <Carousel>
                                    {fakeMovieList.map(fakeMovieList => (
                                        <Carousel.Item>
                                            {fakeMovieList}
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                        </Card>

                        <br/>
                        <Card>
                        <Card.Header>Movie Watch History</Card.Header>
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
                    <Col className="pt-4">
                    <Card style={{height: "57rem"}}>
                    <Card.Header>Friends</Card.Header>
                        <div className="justify-content-center">
                                <ListGroup className="seacrh=results" variant="flush">
                                    {listItems.map(listItems => (
                                        <ListGroup.Item>
                                            {listItems}
                                        </ListGroup.Item>
                                    ))}
                                    <ListGroup.Item>----------</ListGroup.Item>
                                </ListGroup>
                        </div>
                        
                    </Card>
                        
                    </Col>
                </Row>
            </Container>
      
        </>
    )
}