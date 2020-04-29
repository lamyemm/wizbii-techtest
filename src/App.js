import React from "react";
import Authentication from "./components/authentication/authentication";
import Dashboard from "./components/dashboard/dashboard";
import "./App.css";

function App() {
  // TODO : get access-token here, and render Dashboard if authenticated
  let auth = false;

  return (
    <div className="App">
      {auth ? (
        <Dashboard></Dashboard>
      ) : (
        <Authentication auth={auth}></Authentication>
      )}
    </div>
  );
}

export default App;
