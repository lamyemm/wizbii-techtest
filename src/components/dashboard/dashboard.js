import React, { useState, useEffect } from "react";

const Dashboard = ({ token }) => {
  const [dashboard, setDashboard] = useState(null);

  async function fetchPost(token) {
    const requestOptions = {
        method: "POST",
        headers: {"Authorization" : `Bearer ${token}`},
        body: {}
      };
    const response = await fetch('https://api.wizbii.com/v2/dashboard/?direction=newest', requestOptions);
    setDashboard(await response.json());
  }

  useEffect(() => {
    fetchPost(token);
  }, [token]);

  if (!dashboard) {
    return "loading...";
  }

  return (
    <details>
      <summary>{dashboard.username}</summary>
      <strong>{dashboard.age}</strong> years old
      <br />
    </details>
  );
};

export default Dashboard;
