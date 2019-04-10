import React, { Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import Home from './Home'

const App = () => (
  <Fragment>
    <h1>Gotcha Productions!</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">All Movies</NavLink>
    </nav>
    <Route exact path="/" component={Home} />
    <Route path="/movies" component={Movies} />
  </Fragment>
)

export default App
