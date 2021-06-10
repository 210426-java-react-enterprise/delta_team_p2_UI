//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthComponent } from './components/AuthComponent';
import './App.css';
import { LandingComponent } from './components/LandingComponent';
import NavComponent from './components/NavComponent';
import { useState } from 'react';

const logo = require("./logo.svg") as string;//WAT

//const mockUser = false;

function App() {

  const [loggedIn, setLoggedIn] = useState(undefined as boolean | undefined)

  return (
    <>
      <Router>
        <NavComponent userLogin={loggedIn} setUserLoggedIn={setLoggedIn}></NavComponent>
        <Switch>
          <Route path="/auth" render={() => <AuthComponent />} />
          <Route path="/landing" render={() => <LandingComponent />} />
        </Switch>
      </Router>
    </>


  );
}

export default App;
