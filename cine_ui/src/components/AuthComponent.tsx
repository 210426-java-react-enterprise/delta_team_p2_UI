import { Form, Button} from "react-bootstrap";
import { useState } from "react";
import { register } from "../remote/register-service"
import { Redirect } from "react-router-dom";
import { authenticate } from "../remote/login-service";
import { User } from "../models/user";
import { follower } from "../models/follower";
import { getFollowing } from "../remote/landing-service";

interface IAuthProps{
    currentUser: User | undefined,
    setCurrentUser: (setUserLogIn: User | undefined) => void
    //setFollowing: (setUserFollowing: [follower | undefined]) => void
}

export function AuthComponent(props: IAuthProps) {

    const [authName, setAuthName] = useState('');
    const [authPass, setAuthPass] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userBio, setUserBio] = useState('');

    let updateAuthName = (e: any) => {
        setAuthName(e.currentTarget.value);
    }

    let updateAuthPass = (e: any) => {
        setAuthPass(e.currentTarget.value);
    }

    let updateUsername = (e: any) => {
        setUsername(e.currentTarget.value);
    }

    let updatePassword = (e: any) => {
        setPassword(e.currentTarget.value);
    }

    let updateEmail = (e: any) => {
        setEmail(e.currentTarget.value);
    }

    let updateFirstName = (e: any) => {
        setFirstName(e.currentTarget.value);
    }

    let updateLastName = (e: any) => {
        setLastName(e.currentTarget.value);
    }

    let updateUserBio = (e: any) => {
        setUserBio(e.currentTarget.value);
    }

    let registerUser = async (e: any) => {
        e.preventDefault();
        console.log(username, password, email, firstName, lastName, userBio);
        await register(username, password, email, firstName, lastName, userBio);
        console.log("Complete.");
    }

    let loginUser = async (e: any) => {
        e.preventDefault();
        console.log('VERSION 0.1 NEW IP', authName, authPass);
        //let authUser = await authenticate(authName, authPass);
        let response = await authenticate(authName, authPass);
        localStorage.setItem("authorization", response.headers.authorization);
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
        localStorage.setItem("un",response.data.username)
        props.setCurrentUser(response.data)
        console.log(`Welcome, ${response.data.username}`)
       
    }
    
    

    return (
        props.currentUser ?
        <Redirect to = "/landing"/>
        :
        <>
        <div className="col-sm-4 float-sm-right">
            <Form className="row px-4">
                <h2 className= "col-12">Login</h2>
                <Form.Group className="col-12 col-sm-6 float-sm-left" controlId="login-form-username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control onChange={updateAuthName} type="text" placeholder="username" />
                </Form.Group>
                <Form.Group className="col-12 col-sm-6 float-sm-left" controlId="login-form-password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control onChange={updateAuthPass} type="password" placeholder="******"/>
                </Form.Group>
                <Form.Group className="text-center col-12">
                    <Button className="" variant="danger" type="submit" onClick={loginUser}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            <Form className="row px-4">
                <h2 className="col-12">Register</h2>
                <Form.Group className="col-12 col-sm-6 float-sm-left" controlId="registration-form-username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control onChange={updateUsername} type="text" placeholder="username" />
                </Form.Group>
                <Form.Group className="col-12 col-sm-6 float-sm-left" controlId="registration-form-password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control onChange={updatePassword} type="password" placeholder="******"/>
                </Form.Group>
                <Form.Group className="col-12" controlId="registration-form-email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control onChange={updateEmail} type="email" placeholder="johnbond@email.net" />
                </Form.Group>
                <Form.Group className="col-12 col-sm-6 float-sm-left" controlId="registration-form-first-name">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control onChange={updateFirstName} type="text" placeholder="John" />
                </Form.Group>
                <Form.Group className="col-12 col-sm-6 float-sm-left" controlId="registration-form-last-name">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control onChange={updateLastName} type="text" placeholder="Bond" />
                </Form.Group>
                <Form.Group className="col-12" controlId="registration-form-user-bio">
                    <Form.Label>Bio:</Form.Label>
                    <Form.Control onChange={updateUserBio} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="text-center col-12">
                    <Button className="" variant="danger" type="submit" onClick={registerUser}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
        </>
    )
}