import { Button, ButtonGroup, Card, CardColumns, Carousel, Col, Container, FormControl, Image, ListGroup, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../action/UseLocalStorage";
import { Movie } from "../models/movie";
import { Result } from "../models/rapidSearchResult";
import { addToWatchList, movieSearch, scoreMovie } from "../remote/moviesearch-service";
import { moreDetails, popularSearch } from "../remote/moreInfo-service";


interface IMovieSearch {
}

export function MovieSearchComponent(props: IMovieSearch) {

    const [movieElement, setMovieElement] = useState(undefined as unknown as Result[] || undefined);
    const [title, setTitle] = useState('');
    const [detailMovie, setdetailMovie] = useState(false);
    const [listMovie, setlistMovie] = useState(false);
    const [wantedMovie, setWantedMovie] = useState(undefined as unknown as Result || undefined);
    const [ImdbID, setImdbId] = useState('');

    let toggleDetailMovie = (result: Result) => {
        console.log('RESULT', result)
        setWantedMovie(result);
        setImdbId(result.ImdbID);
        movieDetailLookup(result.ImdbID);
        setlistMovie(false);
        setdetailMovie(true);
    }
    let toggleListMovie = (e: any) => {
        e.preventDefault();
        setWantedMovie(previousMovie => undefined as unknown as Result);
        setdetailMovie(false);
        setlistMovie(true);
    }
    let doMovieSearch = async (e: any) => {
        e.preventDefault();
        const getData = async () => {
            console.log('search title: ' + title);
            let response = await movieSearch(title);
            console.log(response)
            setMovieElement(response.Search);
        };
        getData();
        setlistMovie(true);
    }

    let popSearch = async () => {
        console.log('popular movie search') 
        let response = await popularSearch();
        console.log('POP: ', response)
        setMovieElement(response.Search);
        setlistMovie(true);
        }
    

    let movieDetailLookup = async (thing: string) => {
        const getData = async () => {
            let response = await moreDetails(thing);
            console.log('MOVIE DETAILS' + response);
        }
        getData();
    }

    let updateTitle = (e: any) => {
        setTitle(e.currentTarget.value);
    }


    let sendToWatchList = async () => {
        const getData = async () => {
            let response = await addToWatchList(ImdbID);
            console.log('SENT TO WATCHLIST' + response);
        }
        getData();
    }

    let rate = async (score: number) => {
        let rating = {
            imdbId: ImdbID,
            score: score,
            review: ""
        }
        console.log('RATING: ', rating)
        let json = JSON.stringify(rating);
        console.log('JSON: ', json)
        let response = await scoreMovie(json);
        console.log('RESP: ', response)
    }

    return (
        <>
            <Container style={{ marginTop: "10px" }}>
                <Row className="justify-content-center">
                    <Col className="col-6" style={{ padding: "2px" }}>
                        <FormControl type="text" placeholder="Search" onSubmit={doMovieSearch} onChange={updateTitle} />
                    </Col>
                    <Col className="col-1" style={{ padding: "2px" }}>
                        <Button type="submit" onClick={doMovieSearch} >Submit</Button>
                    </Col>
                    <Col className="col-1" style={{ padding: "2px" }}>
                        <Button type="submit" onClick={popSearch} >Popular</Button>
                    </Col>
                </Row>
            </Container>
            {
                listMovie
                &&
                <Container>
                    <Row>
                        <Col>
                            <ListGroup>
                                {movieElement?.map((movie) => {
                                    return (
                                        <ListGroup.Item action onClick={() => toggleDetailMovie(movie)} style={{ margin: "10px" }}>
                                            {movie.Title}
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            }
            {
                detailMovie
                &&
                <Container >
                    <Row >
                        <Col ></Col>
                        <Col xs={8} >
                            <Card>
                                <Card.Header>{wantedMovie.Title}</Card.Header>
                                <Card.Img src={wantedMovie.Poster} className="d-block mx-auto img-fluid w-50" />
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
                                                <Row className="justify-content-center">
                                                    <Button style={{margin: "0px"}} className="i-block col-2" variant="outline-warning" onClick={() => rate(1)} block>1</Button>
                                                    <Button style={{margin: "0px"}} className="i-block col-2" variant="outline-warning" onClick={() => rate(2)} block>2</Button>
                                                    <Button style={{margin: "0px"}} className="i-block col-2" variant="outline-warning" onClick={() => rate(3)} block>3</Button>
                                                    <Button style={{margin: "0px"}} className="i-block col-2" variant="outline-warning" onClick={() => rate(4)} block>4</Button>
                                                    <Button style={{margin: "0px"}} className="i-block col-2" variant="outline-warning" onClick={() => rate(5)} block>5</Button>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <Button variant="outline-success" onClick={sendToWatchList} block>+</Button>{' '}
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
