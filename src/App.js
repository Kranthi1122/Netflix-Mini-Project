import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

import Login from './components/Login'

import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)

export default App
