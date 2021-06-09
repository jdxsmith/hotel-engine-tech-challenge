const matchingRepos = (search) => {
  return fetch(`https://api.github.com/search/repositories?q=${search}`)
  .then(response => response.json())
}

const matchingReposByStars = (search) => {
  return fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc`)
  .then(response => response.json())
}

export { matchingRepos, matchingReposByStars };