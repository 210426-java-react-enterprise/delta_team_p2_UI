import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { User } from "../models/user";
interface IPropLogOut{
    currentUser: User | undefined,
    setCurrentUser: (setUserLogIn: User | undefined) => void
}

export function LogOutComponent(props:IPropLogOut){

    useEffect(()=> {
        localStorage.clear();
        props.setCurrentUser(undefined);
        window.location.reload();
    })

    
    return(
        <>
            <Redirect to = "/"/>
        </>
    )
}