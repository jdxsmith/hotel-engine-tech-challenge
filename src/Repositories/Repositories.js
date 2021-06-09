import React, { Component } from 'react';
import './Repositories.css';
import RepositoryCard from '../RepositoryCard/RepositoryCard'

class Repositories extends Component {
  constructor() {
    super()
    this.state = {
      matchedRepos: []
    }
  }

  render() {
    return(
      <section className='matched-repos'>
        {/* <p className='default-message'>Your search results will appear here!</p> */}
        <RepositoryCard />
      </section>
    )
  }
}

export default Repositories;