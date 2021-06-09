import './App.css';
import { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Repositories from '../Repositories/Repositories';
import { matchingRepos } from '../apiCalls';
import { matchingReposByStars } from '../apiCalls';
import { matchingReposByLanguage } from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      matchedRepos: []
    }
  }

  filterRepos = async (event, search) => {
    event.preventDefault();
    await matchingRepos(search)
    .then(matchingRepos => this.setState({ matchedRepos: matchingRepos.items }))
    .catch(error => console.log(error))
  }

  sortReposByStars = async (event, search) => {
    event.preventDefault();
    await matchingReposByStars(search)
    .then(matchingRepos => this.setState({ matchedRepos: matchingRepos.items }))
    .catch(error => console.log(error))
  }

  filterByLanguage = async (event, search, language) => {
    event.preventDefault();
    await matchingReposByLanguage(search, language)
    .then(matchingRepos => this.setState({ matchedRepos: matchingRepos.items }))
    .catch(error => console.log(error))
  }

  render() {
    return(
      <section classname='app'>
        <h1 className='page-title'>GitHub Repository Search Engine</h1>
        <SearchBar
          filterRepos={ this.filterRepos }
          sortReposByStars={ this.sortReposByStars }
          filterByLanguage={ this.filterByLanguage }
        />
        <Repositories matchedRepos={ this.state.matchedRepos } />
      </section>
    )
  }
}

export default App;
