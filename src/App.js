import React from 'react';
import './css/tailwind.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './component/Login/Login';
import Profile from './component/Profile/Profile';
import Register from './component/Register/Register';


function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/" exact component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
