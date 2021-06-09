//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthComponent } from './components/AuthComponent';
import './App.css';

const logo = require("./logo.svg") as string;//WAT

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" render={() => <AuthComponent />} />
        </Switch>
      </Router>
    </>


  );
}

export default App;
