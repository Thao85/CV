import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
   
import Home from './display/home';       
import './App.css';
import Educations from './display/educations';
import Contacts from './display/contacts';

function App() {
  return(
   
      <BrowserRouter basename = {process.env.PUBLIC_URL} >
        <Route>
          <Route exact path= "/CV/" component={Home}/>
          <Switch>
          <Route path="/CV/educations" component={Educations} />
          <Route path="/CV/contacts" component={Contacts} /> 
          </Switch>
        </Route>
      </BrowserRouter>
    )
}

export default App;
