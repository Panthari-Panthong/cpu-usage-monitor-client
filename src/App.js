import React from "react";
import CpuMonitorHeaderContainer from "./components/CpuMonitorHeaderContainer";
import AuthFormContainer from "./components/AuthFormContainer";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/Protected.route";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={AuthFormContainer} />
        <ProtectedRoute path="/monitor" component={CpuMonitorHeaderContainer} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
