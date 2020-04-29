import React, { useState, useEffect } from "react";
import Authentication from "./components/authentication/authentication";
import Dashboard from "./components/dashboard/dashboard";
import "./App.css";

function App() {
  // TODO : get access-token here, and render Dashboard if authenticated
  const [authentication, setAuthentication] = useState(false);

  // 1. Request to API
  const [username, setUsername] = useState("decouverte%2B2%40wizbii");
  const [password, setPassword] = useState("decouverte");
  const [grantType, setGrantType] = useState("password");
  const [clientId, setClientId] = useState("test");

  const [logInfo, setLogInfo] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ username, password, grantType, clientId }),
      // or : body: JSON.stringify(payload)
    };

    fetch("https://api.wizbii.com/v1/account/validate", requestOptions)
      .then((response) => response.json())
      .then((data) => logInfo(data));
  }, []);

  let token = null;

  if (logInfo.length !== 0) {
    // pass token to component Dashboard
    token = localStorage.getItem("access-token");
    setAuthentication(true);
  }

  return (
    <div className="App">
      {authentication ? (
        <Dashboard token={token}></Dashboard>
      ) : (
        <Authentication auth={authentication}></Authentication>
      )}
    </div>
  );
}

export default App;
