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
        {!this.props.matchedRepos || this.props.matchedRepos.length === 0 &&
          <p className='default-message'>Your search results will appear here!</p>
        }
        {this.props.matchedRepos === undefined &&
          <p className='default-message'>Error: Please search for a repository.</p>
        }
        {this.props.matchedRepos &&
          this.props.matchedRepos.map(repo => {
            return(
              <RepositoryCard 
                matchedRepo={ repo }
                key={ repo.id }
              />
            )
          })
        }
      </section>
    )
  }
}

export default Repositories;