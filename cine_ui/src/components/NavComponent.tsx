import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { follower } from "../models/follower";
import { User } from "../models/user";
import DarkModeComponent from "./DarkModeToggleComponent";

interface INavProps{
    currentUser: User | undefined,
    setUserLogIn: (currentLoginStatus: User | undefined) => void,
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}

function NavComponent(props: INavProps){


    //get logged in user from local storage
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser")||"{}");
    const userChecker = localStorage.getItem("loggedInUser");

    function logOut(){
        //props.setUserLoggedIn(undefined);
    }
   
    console.log(loggedUser);
    console.log("userchecker",userChecker)
    return(
    <>
        <Navbar bg="light">
            
            <Navbar.Brand><Nav.Link href=""><img style={{"margin":"0px", "width":"35px"}} src="logo192.png" />
                Cineholics Anonymous</Nav.Link></Navbar.Brand>
            {
                userChecker
                
                ?
                <>
                    <Nav className="mr-auto">
                        <Nav.Link href="/landing">{String(loggedUser.username)}'s Profile</Nav.Link>
                        {/* <Nav.Link href="/watchhistory">My Watch History</Nav.Link>
                        <Nav.Link href="/watchlist">My Future Watch List</Nav.Link> */}
                        {/* <Nav.Link href="/favmovies">Favorites</Nav.Link> */}
                        <Nav.Link href="/out">Log Out</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Nav.Link href="/moviesearch">Movie Search</Nav.Link>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button type="submit">Submit</Button>   */}

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