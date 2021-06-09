import './App.css';
import { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super()

  }

  render() {
    return(
      <section classname='app'>
        <h1 className='page-title'>GitHub Repository Search Engine</h1>
        <SearchBar />
      </section>
    )
  }
}

export default App;
