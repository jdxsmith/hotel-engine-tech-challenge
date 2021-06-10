import './Repositories.css';
import RepositoryCard from '../RepositoryCard/RepositoryCard'

const Repositories = (props) => {
  return(
    <section className='matched-repos'>
      {!props.matchedRepos || props.matchedRepos.length === 0 &&
        <p className='default-message'>Your search results will appear here!</p>
      }
      {props.matchedRepos === undefined &&
        <p className='default-message'>Error: Please search for a repository.</p>
      }
      {props.matchedRepos &&
        props.matchedRepos.map(repo => {
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

export default Repositories;