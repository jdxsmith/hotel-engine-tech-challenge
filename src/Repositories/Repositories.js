import React, { Component } from 'react';
import './Repositories.css';
import RepositoryCard from '../RepositoryCard/RepositoryCard'

class Repositories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className='matched-repos'>
        {this.props.matchedRepos.length === 0 &&
          <p className='default-message'>Your search results will appear here!</p>
        }
        {this.props.matchedRepos.map(repo => {
          return(
            <RepositoryCard 
              matchedRepo={ repo }
              key={ repo.id }
            />
          )
        })}
      </section>
    )
  }
}

export default Repositories;