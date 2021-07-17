class MusicHandler {
  constructor (service) {
    this._service = service

    this.postMusicHandler = this.postMusicHandler.bind(this)
    this.getMusicsHandler = this.getMusicsHandler.bind(this)
    this.getMusicByIdHandler = this.getMusicByIdHandler.bind(this)
    this.putMusicByIdHandler = this.putMusicByIdHandler.bind(this)
    this.deleteMusicByIdHandler = this.deleteMusicByIdHandler.bind(this)
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

  getMusicsHandler () {
    const musics = this._service.getMusics()
    return {
      status: 'success',
      data: {
        musics
      }
    }
  }

  getMusicByIdHandler (request, h) {
    try {
      const { songId } = request.params
      const music = this._service.getMusicById(songId)

      return {
        status: 'success',
        data: {
          music
        }
      }
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message
      })

      response.code(404)
      return response
    }
  }

  putMusicByIdHandler (request, h) {
    try {
      const { songId } = request.params

      this._service.editMusicById(songId, request.payload)

      return {
        status: 'success',
        message: 'Lagu berhasil diperbaharui'
      }
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message
      })
      response.code(404)
      return response
    }
  }

  deleteMusicByIdHandler (request, h) {
    try {
      const { songId } = request.params

      this._service.deleteMusicById(songId)
      return {
        status: 'success',
        message: 'Lagu berhasil dihapus'
      }
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: 'Lagu gagal dihapus, Id tidak ditemukan'
      })
      response.code(404)
      return response
    }
  }
}

module.exports = MusicHandler
