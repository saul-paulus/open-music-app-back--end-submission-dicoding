class MusicHandler {
  constructor (service) {
    this._service = service

    this.postMusicHandler = this.postMusicHandler.bind(this)
  }

  postMusicHandler (request, h) {
    try {
      const { title = 'untitled', year, performer, genre, duration } = request.payload

      const songId = this._service.addMusic({ title, year, performer, genre, duration })

      console.log(songId)

      const response = h.response({
        status: 'success',
        message: 'Lagu berhasil ditambahkan',
        data: {
          songId
        }
      })
      response.code(201)
      return response
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message
      })
      response.code(400)
      return response
    }
  }
}

module.exports = MusicHandler
