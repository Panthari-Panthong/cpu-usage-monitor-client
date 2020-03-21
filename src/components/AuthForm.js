import React from 'react';

function AuthForm(props) {
  return (
    <div className="w3-container w3-display-middle">
      <h1 className="w3-container w3-blue-grey">Log In</h1>
      <form onSubmit={props.onSubmit} className="w3-container w3-card-4">
        <label>
          Email:
          <br />
          <input
            className="w3-input"
            type="email"
            name="email"
            onChange={props.onChange}
            defaultValue={props.values.email}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            className="w3-input"
            name="password"
            type="password"
            onChange={props.onChange}
            defaultValue={props.values.password}
            placeholder="Password"
          />
        </label>
        <input
          className="w3-button w3-section w3-blue-grey w3-ripple"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default AuthForm;