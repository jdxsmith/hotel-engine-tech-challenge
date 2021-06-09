import React, { Component } from 'react';
import './SearchBar.css';
import matchingRepos from '../apiCalls'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      repoName: '',
      matchedRepos: []
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  filterRepos = async (event) => {
    event.preventDefault();
    await matchingRepos()
    .then(matchingRepos => this.setState({ matchedRepos: matchingRepos.items }))
    .catch(error => console.log(error))
  }

  render() {
    return(
      <form className='search-bar-form'>
        <input className='search-bar-input'
          type='text'
          placeholder='Search by name of repository...'
          name='repoName'
          value={ this.state.repoName }
          onChange={ event => this.handleInput(event) }
        />
        <button className='search-bar-button' onClick={ event => this.filterRepos(event) }>
          SEARCH
        </button>
      </form>
    )
  }
}

export default SearchBar;