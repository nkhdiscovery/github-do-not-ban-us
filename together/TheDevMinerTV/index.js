(async () => {
  require('node-fetch')('https://api.github.com/repos/1995parham/github-do-not-ban-us')
  .then(data => data.json())
  .then(data => console.log(`
GitHub is for everyone!
❤️️ to everyone of you ${data.forks} people!

The newest 20 forks:`))
  .then(() => require('node-fetch')('https://api.github.com/repos/1995parham/github-do-not-ban-us/forks'))
  .then(data => data.json())
  .then(data => data.forEach(repo => console.log(`- ${repo.owner.login}`)))
})()
