import './AuthScreen.css';

const loginButton = document.getElementById('login-form-button');
const usernameInputField = document.getElementById('login-form-field-username');
const passwordInputField = document.getElementById('login-form-field-password');

function AuthScreen(){


    let login = () =>{
        let usernameValue = usernameInputField.value;
        let passwordValue = passwordInputField.value;
        console.log(`Logging in with credentials: ${usernameValue} ${passwordValue}`); // template literals (interpolation)
        
        console.log('My real login is done!');

    };

    return(
        <div className ="AuthScreen">
            <aside className="AuthScreen-header">
                <h2>Login</h2>
                <input id="login-form-field-username" type="text" placeholder="Username"/>
                <br/><br/>
                <input id="login-form-field-password" type="password" placeholder="Password"/>
                <br/><br/>
                <button id="login-form-button" onClick = {login}>Login</button>
                <br/><br/>
                <h2>Registration</h2>
                <input id="register-form-field-username" type="text" placeholder="Username"/>
                <br/><br/>
                <input id="register-form-field-password" type="password" placeholder="Password"/>
                <br/><br/>
                <input id="register-form-field-email" type="text" placeholder="Email"/>
                <br/><br/>
                <input id="register-form-field-firstname" type="text" placeholder="First name"/>
                <br/><br/>
                <input id="register-form-field-lastname" type="text" placeholder="Last name"/>
                <br/><br/>
                <button id="register-form-button">register</button>
                <br/><br/>
            </aside>
            
        </div>
    );
}

export default AuthScreen;