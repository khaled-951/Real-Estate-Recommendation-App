import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
//import SignUpPage from './Pages/SignUpPage';
//import ForgotPasswordPage from './Pages/ForgotPasswordPage';
//import ErrorPage from './Pages/ErrorPage';
//import ViewPropertyPage from './Pages/ViewPropertyPage';
//import SearchPage from './Pages/SearchPage';
//import LoaderPage from './Pages/LoaderPage';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
const FrontPage = lazy(() => import('./Pages/FrontPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const SignUpPage = lazy(() => import('./Pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('./Pages/ForgotPasswordPage'));
const ErrorPage = lazy(() => import('./Pages/ErrorPage'));
const ViewPropertyPage = lazy(() => import('./Pages/ViewPropertyPage'));
const SearchPage = lazy(() => import('./Pages/SearchPage'));
const LoaderPage = lazy(() => import('./Pages/LoaderPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div><Backdrop open={true} ><CircularProgress color="inherit" /></Backdrop></div>}>
        <Switch>
          <Route exact path="/"><FrontPage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/signup"><SignUpPage /></Route>
          <Route path="/forgotpassword"><ForgotPasswordPage /></Route>
          <Route path="/property/:propertyId"><ViewPropertyPage /></Route>
          <Route path="/search/:searchQuery"><SearchPage /></Route>
          <Route path="/search"><SearchPage /></Route>
          <Route path="/loader"><LoaderPage /></Route>
          <Route path="*"><ErrorPage /></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
