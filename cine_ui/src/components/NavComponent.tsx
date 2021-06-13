import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { User } from "../models/user";

interface INavProps{
    currentUser: User | undefined
    setUserLogIn: (currentLoginStatus: User | undefined) => void
}

function NavComponent(props: INavProps){


    function logOut(){
        //props.setUserLoggedIn(undefined);
    }


    return(
    <>
        <Navbar bg="light">
            <Navbar.Brand>Cineholics Annonymous</Navbar.Brand>
            {
                props.currentUser
                ?
                <>
                    <Nav className="mr-auto">
                        <Nav.Link>{props.currentUser.username}'s Profile</Nav.Link>
                        <Nav.Link href="/searchmovies">Movie List</Nav.Link>
                        <Nav.Link href="/favmovies">Favorites</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button type="submit">Submit</Button>  
                    </Form>
                    </>
                    :
                    <>
                    <Nav className="mr-auto">

                    </Nav>
 
                    </>
            }

        </Navbar>
    </>
    )
}
export default NavComponent;