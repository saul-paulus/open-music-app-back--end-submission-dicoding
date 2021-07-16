const MusicHandler = require('./handler')
const routes = require('./routes')

module.exports = {
  name: 'musics',
  version: 'v1.0.0',
  register: async (server, { service }) => {
    const musicsHandler = new MusicHandler(service)
    server.route(routes(musicsHandler))
  }
}
