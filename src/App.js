import React, { useState, useEffect } from 'react'
import Authentication from './components/authentication/authentication'
import Dashboard from './components/dashboard/dashboard'
import './App.css'

function App() {
  // TODO : get access-token here, and render Dashboard if authenticated
  const [authentication, setAuthentication] = useState(false)

  // 1. Request to API
  const [username, setUsername] = useState('decouverte+2@wizbii.com')
  const [password, setPassword] = useState('decouverte')
  const [grantType, setGrantType] = useState('password')
  const [clientId, setClientId] = useState('test')

  const [logInfo, setLogInfo] = useState(null)

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({ username, password, grantType, clientId }),
    }

    fetch('https://api.wizbii.com/v1/account/validate', requestOptions)
      .then((response) => response.json())
      .then((data) => setLogInfo(data))
  }, [])

  let token = null

  useEffect(() => {
    if (logInfo) {
      // pass token to component Dashboard
      token = localStorage.getItem('access-token')
      setAuthentication(true)
    }
  }, [])

  // Temp fake state to allow authentication
  setTimeout(() => {
    setAuthentication(true)
  }, 1000)

  return (
    <div className="App">
      {authentication ? (
        <Dashboard token={token} />
      ) : (
        <Authentication auth={authentication} />
      )}
    </div>
  )
}

export default App
