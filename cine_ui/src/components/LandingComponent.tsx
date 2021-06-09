
import {Button, Form, FormControl, Navbar, Nav} from "react-bootstrap"

interface IUserrops{

}

export function LandingComponent(props: any){

    let test = true; 
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
        </>
    )
}