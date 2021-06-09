//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthComponent } from './components/AuthComponent';
import './App.css';
import { LandingComponent } from './components/LandingComponent';

const logo = require("./logo.svg") as string;//WAT

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" render={() => <AuthComponent />} />
          <Route path="/landing" render={() => <LandingComponent />} />
        </Switch>
      </Router>
    </>


  );
}

export default App;
