
import { useState } from "react";
import { Card, CardColumns, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Movie } from "../models/movie";



interface IMoviesProp {
    movies: any[]
}

export function FavoriteMoviesComponent(props: IMoviesProp) {
    const [index, setIndex] = useState(0);


    const rows = props.movies.reduce(function (rows, key, index) {
        return (index % 3 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows;
    }, []);

    console.log(rows);

    return (
        <Container style={{marginTop:"50px"}}>
            <Row>
                <Col>
                    <Carousel>
                        {rows.map((twoMovies: any) => (
                            <Carousel.Item >
                                <CardColumns>
                                    {twoMovies.map((movie: any) => (
                                        <Card >
                                            <Card.Img width={201} height={403} alt="201x403" src={movie.poster} />
                                        </Card>))}
                                </CardColumns>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}


