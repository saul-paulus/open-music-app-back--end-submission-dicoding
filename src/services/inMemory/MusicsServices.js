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

  getMusics () {
    return this._musics
  }

  getMusicById (songId) {
    const music = this._musics.filter(music => music.id === songId)[0]

    if (!music) {
      throw new Error('Lagu tidak ditemukan')
    }
    return music
  }

  editMusicById (songId, { title, year, performer, genre, duration }) {
    const index = this._musics.filter(music => music.id === songId)

    if (index === -1) {
      throw new Error('Gagal memperbaharui lagu, Id tidak ditemukan')
    }

    const updatedAt = new Date().toISOString()

    this._musics[index] = {
      ...this._musics[index],
      title,
      year,
      performer,
      genre,
      duration,
      updatedAt
    }
  }

  deleteMusicById (songId) {
    const index = this._musics.findIndex(music => music.id === songId)

    if (index === -1) {
      throw new Error('Lagu gagal dihapus, Id tidak ditemukan')
    }

    this._musics.splice(index, 1)
  }
}

module.exports = MusicService
