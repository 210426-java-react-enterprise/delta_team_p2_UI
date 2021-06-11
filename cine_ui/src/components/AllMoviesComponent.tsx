import { Col, Container, ListGroup, Row } from "react-bootstrap";

interface IAllMoviesProps{
    //this prop refers to what we will use to call in App state level
    allmovies:any[]
}

export function AllMoviesComponent(props:IAllMoviesProps){
    function alterMessage(){
        alert("selected movieSelected");
    }
    //click or double for more details on movies serperate call to another api(/movieDetails/id)--->just id(IMdb [tt}])
    return(
        //parent class to return
        <Container style={{marginTop:"100px"}}>
            <Row >
                <Col>
                {props.allmovies.map((movie,i)=>{
                return(
                    i%2===0
                    ?
                    <ListGroup>
                        <ListGroup.Item action variant="dark">{i} {movie.title}</ListGroup.Item>
                    </ListGroup>
                    :
                    <ListGroup>
                        <ListGroup.Item action variant="light">{i} {movie.title}</ListGroup.Item>
                    </ListGroup>
                )
            })}
                </Col>
            </Row>
        </Container>

    )
}