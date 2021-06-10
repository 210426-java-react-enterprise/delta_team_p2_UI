
import React from "react"

import {ListGroup, Card, Container, Row, Col, Carousel, CardGroup} from "react-bootstrap"

//TODO: Setup interface to take a created User property
interface IUserrops{

}

export function LandingComponent(props: any){

    const listItems = ["A", "B", "C"]

    const fakeMovieList = ["movie1", "movie2", "movie3", "movie 4", "movie 5", "movie6"]

    const rows = fakeMovieList.reduce(function (rows: any, key, index) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

      console.log(rows)


    //TODO: Change these values to match the user's values
    return(

        <>
            <Container fluid>
                <Row>
                    <Col xs = "10">
                        <br/>
                        <Card>
                            <Card.Header>Movies To Watch List</Card.Header>
                                <Carousel >
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
                                {rows.map((twoMovies: any) => (
                                    <Carousel.Item>
                                        <CardGroup>
                                            {twoMovies.map((movie:any) => (
                                                <Card>
                                                    {movie}
                                                </Card>
                                            ))}
                                        </CardGroup>
                                    </Carousel.Item>
                                ))}
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