import React, { useEffect } from 'react'
import axios from 'axios'

import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
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
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/dashboard' component={dashboard} />
        </Switch>
      </BrowserRouter>
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
