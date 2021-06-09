
import React from "react"
import {Button, Form, FormControl, Navbar, Nav, Table, ListGroup, Card, Container, Row, Col} from "react-bootstrap"


interface IUserrops{

}

export function LandingComponent(props: any){

    const listItems = ["A", "B", "C"]

    return(
        <>

            <Navbar bg = "light">
                <Navbar.Brand>Cineholics Annonymous</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link>Profile</Nav.Link>
                        <Nav.Link>Movie List</Nav.Link>
                        <Nav.Link>Favorites</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button type="submit">Submit</Button>      
                    </Form>
            </Navbar>


            <Row>
                <Col md={{ span: 2, offset: 10 }}>
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
                </Col>
            </Row>

            
            <Card className = "float-sm-right" style={{width: '18rem'}}>
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
      
        </>
    )
}