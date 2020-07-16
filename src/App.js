import React from 'react';
import './css/tailwind.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import GuestRoute from './component/GuestRoute/GuestRoute';


function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Router>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <Route path="/profile" component={Profile}></Route>
          <GuestRoute path="/register" component={Register}></GuestRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
