import './RepositoryCard.css'

const RepositoryCard = (props) => {
  return (
    <article className='repository-card'>
      <p>Repository Name: { props.matchedRepo.name }</p>
      <p>Repository Author: { props.matchedRepo.owner.login }</p>
      <p>Stars: { props.matchedRepo.stargazers_count }</p>
    </article>
  )
}

export default RepositoryCard;