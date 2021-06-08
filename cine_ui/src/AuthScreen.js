import './AuthScreen.css';
import React, {useState}from 'react';

const usernameInputField = document.getElementById('login-form-field-username');
const passwordInputField = document.getElementById('login-form-field-password');
const usernameRegisterField = document.getElementById('register-form-field-username');
const passwordRegisterField = document.getElementById('register-form-field-password');
const emailRegisterField = document.getElementById('register-form-field-email');
const firstNameRegisterField = document.getElementById('register-form-field-first-name');
const lastNameRegisterField = document.getElementById('register-form-field-last-name');


function AuthScreen(props){


    let login = () =>{
        let usernameValue = usernameInputField.value;
        let passwordValue = passwordInputField.value;
        console.log(`Logging in with credentials: ${usernameInputField.value} ${passwordInputField.value}`); // template literals (interpolation)
        
        console.log('My real login is done!');

    };

    let register = () =>{
        let usernameRegValue = usernameRegisterField.value;
        let passwordRegValue = passwordRegisterField.value;
        let emailValue = emailRegisterField.value;
        let firstNameValue = firstNameRegisterField.value;
        let lastNameValue = lastNameRegisterField.value;
        console.log(`Registering: ${usernameRegValue} ${passwordRegValue} ${emailValue} ${firstNameValue} ${lastNameValue}`); // template literals (interpolation)
        
        console.log('My real login is done!');

    };

    return(
        <div className ="AuthScreen">
            <aside className="AuthScreen-header">
                <h2>Login</h2>
                <div>                    
                    <input id="login-form-field-username" type="text" placeholder="Username"/>
                    <br/><br/>
                    <input id="login-form-field-password" type="password" placeholder="Password"/>
                    <br/><br/>
                    <button id="login-form-button" onClick = {login}>Login</button>
                    <br/><br/>
                </div>
                <h2>Registration</h2>
                <div>
                    <input id="register-form-field-username" type="text" placeholder="Username"/>
                    <br/><br/>
                    <input id="register-form-field-password" type="password" placeholder="Password"/>
                    <br/><br/>
                    <input id="register-form-field-email" type="text" placeholder="Email"/>
                    <br/><br/>
                    <input id="register-form-field-first-name" type="text" placeholder="First name"/>
                    <br/><br/>
                    <input id="register-form-field-last-name" type="text" placeholder="Last name"/>
                    <br/><br/>
                    <button id="register-form-button" onClick = {register}>Register</button>
                    <br/><br/>
                </div>

            </aside>
            
        </div>
    );
}

export default AuthScreen;