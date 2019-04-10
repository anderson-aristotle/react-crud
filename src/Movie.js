import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

class Movie extends Component {
  constructor () {
    super()

    this.state = {
      movie: null
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    axios.get(`${apiUrl}/movies/${id}`)
      .then(response => this.setState({ movie: response.data.movie }))
      .catch(console.log)
  }

  render () {
    if (!this.state.movie) {
      return <p>loading...</p>
    }
    const { director, title, year } = this.state.movie

    return (
      <Fragment>
        <h4>{title}</h4>
        <p>Release: {year}</p>
        <p>Directed by: {director}</p>
      </Fragment>
    )
  }
}

export default Movie
