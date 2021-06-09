import React, { Component } from 'react';
import './SearchBar.css';
// import matchingRepos from '../apiCalls'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoName: '',
      language: ''
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <section>
        <form className='search-bar-form'>
          <input className='search-bar-input'
            type='text'
            placeholder='Search by name of repository...'
            name='repoName'
            value={ this.state.repoName }
            onChange={ event => this.handleInput(event) }
          />
          <button className='search-bar-button' onClick={ event => this.props.filterRepos(event, this.state.repoName) }>
            SEARCH
          </button>
          <button className='sort-by-stars-button' onClick={ event => this.props.sortReposByStars(event, this.state.repoName) }>
            Sort By Stars
          </button>
          <button className='sort-by-match-button' onClick={ event => this.props.filterRepos(event, this.state.repoName) }>
            Sort By Best Match
          </button>
        </form>
        <form>
          <input className='language-input'
            type='text'
            placeholder='Filter by language...'
            name='language'
            value={ this.state.language }
            onChange={ event => this.handleInput(event) }
          />
          <button className='language-filter-btn' onClick={ event => this.props.filterByLanguage(event, this.state.repoName, this.state.language) }>
            Filter
          </button>
        </form>
      </section>
    )
  }
}

export default SearchBar;