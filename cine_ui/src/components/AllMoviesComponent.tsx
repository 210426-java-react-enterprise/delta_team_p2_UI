import { useState } from "react";
import { Accordion, Button, Card, Col, Container, ListGroup, Popover, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Movie } from "../models/movie";
import { moreDetails } from "../remote/moreInfo-service";
import { SingleMovieComponenet } from "./SingleMovieComponent";

interface IAllMoviesProps {
    //this prop refers to what we will use to call in App state level
    allmovies: any[]
}

export function AllMoviesComponent(props: IAllMoviesProps) {

    const [detailMovie, setdetailMovie] = useState(false);
    const [listMovie, setlistMovie] = useState(true);
    const [wantedMovie, setWantedMovie] =useState(undefined as unknown as Movie || undefined);

    let moreInformation = async (id: number) => {
        console.log("searched Movied", id);
        var desiredMovie = await moreDetails(id);
        console.log('complete');
    }

    let toggleDetailMovie= (movie:Movie)=>{
         setWantedMovie (preMovie => movie);
         setlistMovie(false);
         setdetailMovie(true);
    }

    let toggleListMoivie = (e:any)=>{
        e.preventDefault();
        setWantedMovie(previousMovie => undefined as unknown as Movie);
        setdetailMovie(false);
        setlistMovie(true);
    }

    //click or double for more details on movies serperate call to another api(/movieDetails/id)--->just id(IMdb [tt}])
    return (


        <>
            
            {listMovie && <Container style={{ marginTop: "100px" }}>
                <Row >
                    {/* //parent class to return */}
                    <Col>
                        {props.allmovies.map((movie, i) => {
                            return (
                                i % 2 === 0
                                    ?
                                    <ListGroup style={{ margin: "10px" }}>
                                        <ListGroup.Item action onClick={() => toggleDetailMovie(movie)} variant="dark">{i} {movie.title}</ListGroup.Item>
                                    </ListGroup>
                                    :
                                    <ListGroup style={{ margin: "10px" }}>
                                        <ListGroup.Item action onClick={() => toggleDetailMovie(movie)} variant="light">{i} {movie.title}</ListGroup.Item>
                                    </ListGroup>
                            )
                        })}
                    </Col>
                </Row>
            </Container>}

            {detailMovie && 
                    <>
                    <h2>{wantedMovie.title}</h2>
                    <img src={wantedMovie.poster}/>
                    <button onClick={toggleListMoivie}>Close</button>
                    </>
            }
        </>

    )
}


// toggleDetailedPage = () =>{
//     this.setdetailMovie()
// }

//onClick={() => moreInformation(movie.id)}


    //trying accordian
//     <Accordion>
//     {props.allmovies.map((movie, i) => {
//         <Card>
//             <Card.Header>
//                 <Accordion.Toggle as={Button} variant="link" eventKey={String(i)} >one</Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey={String(i)}>
//                 <Card.Body>in the body</Card.Body>
//             </Accordion.Collapse>
//         </Card>
//     })}
// </Accordion>

// <Container style={{ marginTop: "100px" }}>
//                 <Row >
//                     {/* //parent class to return */}
//                     <Col>
//                         {props.allmovies.map((movie, i) => {
//                             return (
//                                 i % 2 === 0
//                                     ?
//                                     <ListGroup style={{ margin: "10px" }}>
//                                         <ListGroup.Item action onClick={() => moreInformation(movie.id)} variant="dark">{i} {movie.title}</ListGroup.Item>
//                                     </ListGroup>
//                                     :
//                                     <ListGroup style={{ margin: "10px" }}>
//                                         <ListGroup.Item action onClick={() => moreInformation(movie.id)} variant="light">{i} {movie.title}</ListGroup.Item>
//                                     </ListGroup>
//                             )
//                         })}
//                     </Col>
//                 </Row>
//             </Container