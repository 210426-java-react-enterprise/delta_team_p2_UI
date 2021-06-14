import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Button, Card, Col, Container, ListGroup, Image, Nav, Row } from "react-bootstrap";
import { Movie } from "../models/movie";
import { User } from "../models/user";
import { moreDetails } from "../remote/moreInfo-service";
import { getWatchHistory } from "../remote/landing-service";

interface IWatchHistoryProps {
    //this prop refers to what we will use to call in App state level
    currentUser: User | undefined
    allmovies: Movie[];
    onAdd: (fm: Movie) => void;
}

export function WatchHistoryComponent(props: IWatchHistoryProps) {


    const [detailMovie, setdetailMovie] = useState(false);
    const [listMovie, setlistMovie] = useState(true);
    const [wantedMovie, setWantedMovie] = useState(undefined as unknown as Movie || undefined);
    const [movieElement, setMovieElement] = useState(undefined as unknown as Movie[] || undefined);

    useEffect(()=> {
        const getData = async () => {
            let response = await getWatchHistory();
            setMovieElement(response)
            console.log(movieElement);
        };
        getData();
    }, [])

    let toggleDetailMovie = (movie: any) => {
        setWantedMovie(preMovie => movie);
        setlistMovie(false);
        setdetailMovie(true);
    }

    let toggleListMovie = (e: any) => {
        e.preventDefault();
        setWantedMovie(previousMovie => undefined as unknown as Movie);
        setdetailMovie(false);
        setlistMovie(true);
    }


    //click or double for more details on movies serperate call to another api(/movieDetails/id)--->just id(IMdb [tt}])
    return (
        <>
            {/* <Navbar>
                <Nav>
                    <Nav.Link href="/landing">Landing</Nav.Link>
                </Nav>
            </Navbar> */}
            {listMovie && <Container style={{ marginTop: "100px" }}>
                <Row >
                    {/* //parent class to return */}
                    <Col>
                        {movieElement?.map((element, i) => {
                            return (
                                i % 2 === 0
                                    ?
                                    <ListGroup style={{ margin: "10px" }}>
                                        <ListGroup.Item action onClick={() => toggleDetailMovie(element)} variant="dark"> {element.title}</ListGroup.Item>
                                    </ListGroup>
                                    :
                                    <ListGroup style={{ margin: "10px" }}>
                                        <ListGroup.Item action onClick={() => toggleDetailMovie(element)} variant="light"> {element.title}</ListGroup.Item>
                                    </ListGroup>
                            )
                        })}
                    </Col>
                </Row>
            </Container>}

            {detailMovie &&
                <Container >
                    <Row >
                        <Col ></Col>
                        <Col xs={8} >
                            <Card>
                                <Card.Header>{wantedMovie.title}</Card.Header>
                                <Card.Img src={wantedMovie.poster} className="d-block mx-auto img-fluid w-50" />
                                <ListGroup>{Object.entries(wantedMovie).map(([key, value]) => {
                                    return (
                                        <ListGroup.Item>{key} : {value.toString()}</ListGroup.Item>
                                    )
                                })}
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col>
                                                <Button variant="outline-danger" onClick={toggleListMovie} block>Close</Button>{' '}
                                            </Col>
                                            <Col>
                                                <Button variant="outline-warning" block>Rate</Button>{' '}
                                            </Col>
                                            <Col>
                                                <Button variant="outline-success" onClick={() => { props.onAdd(wantedMovie);localStorage.setItem("movies",JSON.stringify([...props.allmovies,wantedMovie])) }} block>Favorites</Button>{' '}
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup>

                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            }
        </>

    )
}


