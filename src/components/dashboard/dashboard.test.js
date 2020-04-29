import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Dashboard from './dashboard'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders Dashboard data', async () => {
  const fakeDashboard = {
    username: 'Serge Papagali',
    age: '32',
    city: 'Grenoble',
  }
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeDashboard),
    })
  )

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Dashboard id="123" />, container)
  })

  expect(container.querySelector('summary').textContent).toBe(
    fakeDashboard.username
  )
  expect(container.querySelector('strong').textContent).toBe(fakeDashboard.age)

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore()
})
