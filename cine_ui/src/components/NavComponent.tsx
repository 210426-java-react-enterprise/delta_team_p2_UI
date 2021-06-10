import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

interface INavProps{
    userLogin: boolean | undefined
    setUserLoggedIn: (currentLoginStatus: boolean | undefined) => void
}

function NavComponent(props: INavProps){

    function logIn(){
        props.setUserLoggedIn(true);
    }

    function logOut(){
        props.setUserLoggedIn(true);
    }

    return(
    <>
        <Navbar bg="light">
            <Navbar.Brand>Cineholics Annonymous</Navbar.Brand>
            {
                props.userLogin
                ?
                <>
                    <Nav className="mr-auto">
                        <Nav.Link>Profile</Nav.Link>
                        <Nav.Link>Movie List</Nav.Link>
                        <Nav.Link>Favorites</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button type="submit">Submit</Button>  
                    </Form>
                    </>
                    :
                    <>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={logIn}>login Test</Nav.Link>

                    </Nav>
 
                    </>
            }

        </Navbar>
    </>
    )
}
export default NavComponent;