import { useHistory } from "react-router-dom";
import { User } from "../models/user";
interface IPropLogOut{
    currentUser: User | undefined,
    setCurrentUser: (setUserLogIn: User | undefined) => void
}

export function LogOutComponent(props:IPropLogOut){

    localStorage.clear();
    props.setCurrentUser(undefined);
    window.location.reload();
    useHistory().push("/")//proper way to logout 
    return(
        <>
        </>
    )
}