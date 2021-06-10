import './RepositoryPage.css'
import { Link } from 'react-router-dom'

const RepositoryPage = (props) => {
  return (
    <section>
      {!props.selectedRepo &&
        <article className='repository-page'>
          <p>Error: Repository not found. Please return to home page.</p>
          <Link to='/'>
            <button className='return-to-search-button'>Return to Home Page</button>
          </Link>
        </article>
      }
      {props.selectedRepo &&
        <article className='repository-page'>
          <p>Repository Name: { props.selectedRepo.name }</p>
          <p>Repository Description: { props.selectedRepo.description }</p>
          <p>Stars: { props.selectedRepo.stargazers_count }</p>
          <p>Language: { props.selectedRepo.language }</p>
          <p>Repository Author: { props.selectedRepo.owner.login }</p>
          <Link to='/'>
            <button className='return-to-search-button'>Return to Search Results</button>
          </Link>
        </article>
      }
    </section>
  )
}

export default RepositoryPage;