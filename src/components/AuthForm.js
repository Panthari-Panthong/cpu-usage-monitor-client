import React from 'react';

function AuthForm(props) {
  return (
    <div className="container">
      <h1 className="w3-container w3-blue-grey">Log In</h1>
      <form onSubmit={props.onSubmit}>
        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            onChange={props.onChange}
            value={props.values.email}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            name="password"
            type="password"
            onChange={props.onChange}
            value={props.values.password}
            placeholder="Password"
          />
        </label>
        <input
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default AuthForm;