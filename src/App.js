import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';



function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          {/* Set when URL meet "/" will auto jump to page Movies */}
          {/* Put the exact to make sure it will set Movies as home page */}
          <Redirect from="/"  exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
