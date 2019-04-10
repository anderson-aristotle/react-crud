import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'

class Movies extends Component {
  constructor () {
    super()

    this.state = {
      movies: []
    }
  }
  componentDidMount () {
    console.log('movies component mounted')
    axios.get(apiUrl + '/movies')
      .then(this.setState({ isLoading: false }))
      .then(response => this.setState({
        movies: response.data.movies
      }))
      .catch(console.log)
  }
  render () {
    if (this.state.movies.length === 0) {
      return <Spinner animation="grow" className="m-3" />
    } else {
      return (
        <Fragment>
          <h4>Movies:</h4>
          <ul>
            {this.state.movies.map(movies => (
              <li key={movies.id}>
                <Link to={'/movies/' + movies.id}>{movies.title}</Link>
              </li>
            ))}
          </ul>
        </Fragment>
      )
    }
  }
}

export default Movies
