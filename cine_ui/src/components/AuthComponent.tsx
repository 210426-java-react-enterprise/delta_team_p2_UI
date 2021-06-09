import "./AuthComponent.css";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import { register } from "../remote/register-service"
import { Redirect } from "react-router-dom";
import React from 'react';

interface IRegisterProps {

}

export function AuthComponent(props: any) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userBio, setUserBio] = useState('');

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

    return (
        <>
            <Form>
                <Form.Group controlId="registration-form-username">
                    <Form.Label className="px-2">Username:</Form.Label>
                    <Form.Control onChange={updateUsername} type="text" placeholder="username" />
                </Form.Group>
                <Form.Group controlId="registration-form-password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control onChange={updatePassword} type="password" placeholder="******"/>
                </Form.Group>
                <Form.Group controlId="registration-form-email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control onChange={updateEmail} type="email" placeholder="address@email.net" />
                </Form.Group>
                <Form.Group controlId="registration-form-first-name">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control onChange={updateFirstName} type="text" placeholder="John" />
                </Form.Group>
                <Form.Group controlId="registration-form-last-name">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control onChange={updateLastName} type="text" placeholder="Bond" />
                </Form.Group>
                <Form.Group controlId="registration-form-user-bio">
                    <Form.Label>Bio:</Form.Label>
                    <Form.Control onChange={updateUserBio} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger" type="submit" onClick={registerUser}>
                    Submit
                </Button>
            </Form>
        </>
    )
}