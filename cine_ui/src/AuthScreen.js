import './AuthScreen.css';
import React from 'react';

function AuthScreen(props) {

    const usernameLogin = React.useRef(null);
    const passwordLogin = React.useRef(null);
    const usernameReg = React.useRef(null);
    const passwordReg = React.useRef(null);
    const email = React.useRef(null);
    const firstName = React.useRef(null);
    const lastName = React.useRef(null);
    const userBio = React.useRef(null);


    const login = e => {
        e.preventDefault();

        const data = {
            usernameValue: usernameLogin.current.value,
            passwordValue: passwordLogin.current.value,
        }

        console.log(`Logging in with credentials ${data.usernameValue}`)
    };

    const register = e => {
        e.preventDefault();

        const data = {
            usernameValue: usernameReg.current.value,
            passwordValue: passwordReg.current.value,
            emailValue: email.current.value,
            firstNameValue: firstName.current.value,
            lastNameValue: lastName.current.value,
            userBioValue: userBio.current.value,
        }

        console.log(`Creating user in with credentials ${data.usernameValue}, ${data.emailValue}, ${data.firstNameValue}, and ${data.lastNameValue}`)
    };

    return (

        <div className = "AuthScreen" >
        <aside className = "AuthScreen-header" >
            <h2> Login </h2>
            <form onSubmit={login}>
                <input type="text" placeholder="username" ref={usernameLogin} />
                <br /> <br />
                <input type="password" placeholder="password" ref={passwordLogin} />
                <br /> <br />
                <button type="submit" className="myButton">Login</button>
            </form>
            <h2> Registration </h2>
            <form onSubmit={register}>
                <input type="text" placeholder="username" ref={usernameReg} />
                <br /> <br />
                <input type="password" placeholder="password" ref={passwordReg} />
                <br /> <br />
                <input type="email" placeholder="email" ref={email} />
                <br /> <br />
                <input type="text" placeholder="first name" ref={firstName} />
                <br /> <br />
                <input type="text" placeholder="last name" ref={lastName} />
                <br /> <br />
                <input type="tex" placeholder="user bio" ref={userBio} />
                <br /> <br />
                <button type="submit" className="myButton">Register</button>
            </form>
        </aside>
        </div>
    )
}

export default AuthScreen;