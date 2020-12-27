import './App.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function App () {
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
      <h1>home page</h1>
      <Link to='dashboard'>dashboard</Link>
    </div>
  )
}
function dashboard () {
  return (
    <div className=''>
      <h1>dashboard page</h1>
    </div>
  )
}
export default App
