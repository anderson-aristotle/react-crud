import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

import Spinner from 'react-bootstrap/Spinner'

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
    if (this.state.movie.length === 0) {
      return Spinner
    }
    console.log('movies component mounted')
    return (
      <Fragment>
        <h4>Movies:</h4>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Movies
