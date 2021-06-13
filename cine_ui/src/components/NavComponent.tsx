import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { User } from "../models/user";
import DarkModeComponent from "./DarkModeToggleComponent";

interface INavProps{
    currentUser: User | undefined,
    setUserLogIn: (currentLoginStatus: User | undefined) => void,
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
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
                        <Nav.Link>Movie List</Nav.Link>
                        <Nav.Link>Favorites</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button type="submit">Submit</Button>  
                    </Form>
                    <DarkModeComponent darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
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