import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastr";
import Home from './Home/Home';
import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e, data, isSignup) {
    e.preventDefault();
    fetch('http://localhost:9999/auth/sign' + (isSignup ? 'up' : 'in'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if (data.username) {
        this.setState({
          username: data.username
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            render={
              () =>
                <Register
                  handleSubmit={this.handleSubmit.bind(this)}
                  handleChange={this.handleChange}
                />
            }
            path="/register"
          />
          <Route
            render={
              () =>
                <Login
                  handleSubmit={this.handleSubmit.bind(this)}
                  handleChange={this.handleChange}
                />
            }
            path="/login"
          />
        </Switch>
      </div>
    );
  }
}

export default App;
