import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from "./component/Login";
import Dashboard from "./webpages/Dashboard";
import Home from '../src/webpages/home'
import MyBooks from './webpages/mybooks';
import Favorites from './webpages/favorite';
import ViewProduct from './webpages/ViewProduct'



const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/home' component={Home} />
            <Route path='/mybooks' component={MyBooks} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/viewProduct/:id' component={ViewProduct} />
          </div>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

































