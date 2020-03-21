import React, { Component } from 'react';
import AuthForm from "./AuthForm";
import auth from './auth';

class AuthContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  
  login = event => {
    event.preventDefault();
    if (this.state.email === "admin@admin.com" && this.state.password === "12345") {
      auth.login(() => {
        this.props.history.push("/monitor");
      })
    }
        this.setState({
          email: "",
          password: ""
        });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <AuthForm
        onSubmit={this.login}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default AuthContainer;

