import React from "react";
import './App.css'
import Header from "./components/Header";
import CpuMonitorContainer from "./components/CpuMonitorContainer";
import AuthFormContainer from "./components/AuthFormContainer";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/Protected.route";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route path="/" exact component={AuthFormContainer} />
        <ProtectedRoute path="/monitor" component={CpuMonitorContainer} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
