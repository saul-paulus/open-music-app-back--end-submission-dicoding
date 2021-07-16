
const { addMusicHandler } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/song',
    handler: addMusicHandler
  }
]

module.exports = routes
