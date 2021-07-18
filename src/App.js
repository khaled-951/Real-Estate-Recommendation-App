import React from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import FrontPage from './Pages/FrontPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><FrontPage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/signup"><SignUpPage /></Route>
          <Route path="/forgotpassword"><ForgotPasswordPage /></Route>
          <Route path="*"><ErrorPage /></Route>
        </Switch>
    </Router>
  );
}

export default App;
