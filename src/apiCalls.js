const matchingRepos = (search) => {
  return fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc`)
  .then(response => response.json())
}

export default matchingRepos;