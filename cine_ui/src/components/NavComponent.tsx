import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


import { User } from "../models/user";

interface INavProps{
    currentUser: User | undefined
    setUserLogIn: (currentLoginStatus: User | undefined) => void
}

function NavComponent(props: INavProps){

    //get logged in user from local storage
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser")||"{}");
    const userChecker = localStorage.getItem("loggedInUser");

    function logOut(){
        //props.setUserLoggedIn(undefined);
    }

    // setTimeout(()=>{
    //     let 
        
    // })
   
    console.log(loggedUser);
    console.log("userchecker",userChecker)
    return(
    <>
        <Navbar bg="light">
            <Navbar.Brand>Cineholics Annonymous</Navbar.Brand>
            {
                userChecker
                
                ?
                <>
                    <Nav className="mr-auto">
                        <Nav.Link>{String(loggedUser.username)}'s Profile</Nav.Link>
                        <Nav.Link href="/searchmovies">Movie List</Nav.Link>
                        <Nav.Link href="/favmovies">Favorites</Nav.Link>
                        <Nav.Link href="/out">Log Out</Nav.Link>
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