import React, { useEffect } from 'react'
import axios from 'axios'

import './App.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
let data1
function App () {
  useEffect(() => {
    const { data } = axios.get('/api/hello')
    data1 = data
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/dashboard' component={dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

function HomePage () {
  return (
    <div className=''>
      <h1>check {data1}</h1>
      <h1>home page</h1>
      <Link to='dashboard'>dashboard</Link>
    </div>
  )
}
function dashboard () {
  return (
    <div className=''>
      <h1>{data1}</h1>
      <h1>dashboard page</h1>
    </div>
  )
}
export default App
