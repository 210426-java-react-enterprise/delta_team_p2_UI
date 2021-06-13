
import { useEffect } from "react";
import { useState } from "react";
import { Card, CardColumns, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useLocalStorage } from "../action/UseLocalStorage";
import { Movie } from "../models/movie";



interface IMoviesProp {
    movies: any[]
}
//get movies from user
//check local storage to update fav
//display local storage movies if not empty
//
export function FavoriteMoviesComponent(props: IMoviesProp) {
    const [index, setIndex] = useState(0);
    const [moviesToggle, setmoviesToggle] = useState(false);
    const [listMovies, setlistMovies] = useState([...props.movies])
    const [localmoviestorage, setlocalmoviestorage]=useLocalStorage("movies",[...props.movies]);


    const rows =localmoviestorage.reduce(function (rows:any, key:any, index:any) {
        return (index % 3 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows;
    }, []);

    //be able to see what row displays.
    // console.log(rows);
    
    return (
        <>
            {localmoviestorage && <Container style={{ marginTop: "50px" }}>
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
            </Container>}

        </>
    )
}


