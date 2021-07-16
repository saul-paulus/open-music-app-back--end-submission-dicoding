const { nanoid } = require('nanoid')
const musics = require('./musics')

const addMusicHandler = (request, h) => {
  const { title = 'untitled', year, performer, genre, duration } = request.payload

  const id = nanoid(16)
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt

  const newMusic = {
    id, title, year, performer, genre, duration, insertedAt, updatedAt
  }

  musics.push(newMusic)

  const isSuccess = musics.filter(music => music.id === id).length > 0

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Lagu berhasil ditambahkan',
      data: {
        songId: id
      }
    })
    response.code(201)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Lagu gagal ditambahkan'
  })
  response.code(500)
  return response
}

module.export = {
  addMusicHandler
}
