import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/dashboard' component={dashboard} />
      </Switch>
    </div>
  )
}

function HomePage () {
  return (
    <div className=''>
      <h1>home page</h1>
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
