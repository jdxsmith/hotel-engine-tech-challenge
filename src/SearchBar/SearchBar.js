import React, { Component } from 'react';
import './SearchBar.css';
import matchingRepos from '../apiCalls'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoName: '',
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
        <button className='search-bar-button' onClick={ event => this.props.filterRepos(event) }>
          SEARCH
        </button>
      </form>
    )
  }
}

export default SearchBar;