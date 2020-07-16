import React from 'react';
import './css/tailwind.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import GuestRoute from './component/GuestRoute/GuestRoute';
import AuthRoute from './component/AuthRoute/AuthRoute';


function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Router>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <AuthRoute path="/profile" component={Profile}></AuthRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
