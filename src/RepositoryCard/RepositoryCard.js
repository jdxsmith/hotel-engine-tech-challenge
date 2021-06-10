import './RepositoryCard.css'
import { Link } from 'react-router-dom'

const RepositoryCard = (props) => {
  return (
    <Link to={`/${props.matchedRepo.id}`} style={{ textDecoration: 'none' }}>
      <article className='repository-card'>
        <p>Repository Name: { props.matchedRepo.name }</p>
        <p>Repository Author: { props.matchedRepo.owner.login }</p>
        <p>Stars: { props.matchedRepo.stargazers_count }</p>
      </article>
    </Link>
  )
}

export default RepositoryCard;