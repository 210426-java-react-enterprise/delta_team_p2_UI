import { Accordion, Button, Card, Col, Container, ListGroup, Popover, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Movie } from "../models/movie";
import { moreDetails } from "../remote/moreInfo-service";
import { SingleMovieComponenet } from "./SingleMovieComponent";

interface IAllMoviesProps {
    //this prop refers to what we will use to call in App state level
    allmovies: any[]
}

export function AllMoviesComponent(props: IAllMoviesProps) {

    const history = useHistory()

    let moreInformation = async (id: number) => {
        console.log("searched Movied", id);
        var desiredMovie = await moreDetails(id);
        console.log('complete');
    }


    //click or double for more details on movies serperate call to another api(/movieDetails/id)--->just id(IMdb [tt}])
    return (
        <Container style={{ marginTop: "100px" }}>
            <Row >
                {/* //parent class to return */}
            <Col>
                    {props.allmovies.map((movie, i) => {
                        return (
                            i % 2 === 0
                                ?
                                <ListGroup style={{margin:"10px"}}>
                                    <ListGroup.Item action onClick={() =>{ <SingleMovieComponenet detailMovie={movie}/>; history.push("/detailmovie")}} variant="dark">{i} {movie.title}</ListGroup.Item>
                                </ListGroup>
                                :
                                <ListGroup style={{margin:"10px"}}>
                                    <ListGroup.Item action onClick={() => moreInformation(movie.id)} variant="light">{i} {movie.title}</ListGroup.Item>
                                </ListGroup>
                        )
                    })}
                </Col>
            </Row>
        </Container>

    )
}


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