import React, { useState, useEffect, Profiler } from 'react'

const Dashboard = (props) => {
  const [dashboard, setDashboard] = useState([])

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
          profile: {
            username: 'Sophia Smith',
            pictureSrc: './profile.png',
            age: 25,
            city: 'Grenoble',
          },
          tags: ['#management', '#marketing', '#community', 'communication'],
          postContent:
            'Salut, je suis Ilona. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus eveniet neque odit adipisci quas, ad culpa blanditiis nulla at nostrum consequuntur molestiae delectus fugit placeat cum quam unde ea? Repudiandae.',
          thanx: 1,
          comments: 0,
        },
        {
          profile: {
            username: 'Ilona Lefeuvre',
            pictureSrc: './profile.png',
            age: 17,
            city: 'Paris',
          },
          tags: ['#management', '#marketing', '#community', 'communication'],
          postContent:
            'Salut, je suis Ilona. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus eveniet neque odit adipisci quas, ad culpa blanditiis nulla at nostrum consequuntur molestiae delectus fugit placeat cum quam unde ea? Repudiandae.',
          thanx: 1,
          comments: 0,
        },
      ])
    }, 1000)
  
  }, [])

  if (!dashboard) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* <p>{dashboard[1].username}</p>
      <strong>{dashboard[1].age}</strong> years old */}
      {/* TODO : map over dashboard object and render component post */}
      <br />
      <p>Posts</p>
    </div>
  )
}

export default Dashboard
