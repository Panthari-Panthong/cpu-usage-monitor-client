import React from 'react';
import auth from './auth';

function Header(props) {
  const checkAuth = () => {
    if(auth.isAuthenticated()){
      return (
        <button
          className="button"
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          logout
        </button>
      );
    }
    return null
  }
  return (
    <div className="header">
      <h1>CPU Usage monitoring</h1>
      {checkAuth()}
    </div>
  );
}

export default Header;