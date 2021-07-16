const routes = (handler) => [
  {
    method: 'POST',
    path: '/song',
    handler: handler.postMusicHandler
  }
]

module.exports = routes
