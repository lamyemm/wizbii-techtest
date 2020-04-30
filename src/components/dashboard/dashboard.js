import React, { useState, useEffect, Profiler } from 'react'
import Post from './../post/post'
import './dashboard.css'

const Dashboard = (props) => {
  const [dashboard, setDashboard] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchPost(token) {
    const requestOptions = {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: {},
    }
    const response = await fetch(
      'https://api.wizbii.com/v2/dashboard/?direction=newest',
      requestOptions
    )
    setDashboard(await response.json())
  }

  useEffect(() => {
    fetchPost(props.token)
  }, [props.token])

  // Temp fake state to allow rendering a post
  // TODO : delete these fake data that will be replaced with mock data
  useEffect(() => {
    setTimeout(() => {
      setDashboard([
        {
          id: '17b',
          profile: {
            username: 'Sophia Smith',
            age: 25,
            city: 'Grenoble',
          },
          tags: ['#management', '#marketing', '#community', 'communication'],
          postContent:
            'Hello, je suis Sophia Smith. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus eveniet neque odit adipisci quas, ad culpa blanditiis nulla at nostrum consequuntur molestiae delectus fugit placeat cum quam unde ea? Repudiandae.',
          thanx: 1,
          comments: 6,
        },
        {
          id: '77b',
          profile: {
            username: 'Ilona Lefeuvre',
            age: 17,
            city: 'Paris',
          },
          tags: ['#management', '#development', '#community', 'communication'],
          postContent:
            'Salut, je suis Ilona. Lorem ipsum dolor sit, amet consectetur adipisicing elit. stiae delectus fugit placeat cum quam unde ea? Repudiandae.',
          thanx: 3,
          comments: 0,
        },
      ])
    }, 1000)
    setLoading(false)
  }, [])


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="main">
          <div>
            {dashboard.map((dashboard) => (
              <Post {...dashboard} key={dashboard.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
