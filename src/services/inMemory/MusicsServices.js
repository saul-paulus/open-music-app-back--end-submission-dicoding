const { nanoid } = require('nanoid')

class MusicService {
  constructor () {
    this._musics = []
  }

  addMusic ({ title, year, performer, genre, duration }) {
    const id = nanoid(16)
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt

    const newMusic = { id, title, year, performer, genre, duration, insertedAt, updatedAt }

    this._musics.push(newMusic)

    const isSuccess = this._musics.filter(music => music.id === id).length > 0

    if (!isSuccess) {
      throw new Error('Lagu gagal ditambahkan')
    }

    return id
  }
}

module.exports = MusicService
