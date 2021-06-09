const matchingRepos = () => {
  return fetch(`https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`)
  .then(response => response.json())
}

export default matchingRepos;