import './RepositoryPage.css'
import { Link } from 'react-router-dom'

const RepositoryPage = (props) => {
  return (
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
  )
}

export default RepositoryPage;