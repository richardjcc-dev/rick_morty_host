import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock para la API de Rick and Morty de todos los personajes
  http.get('https://rickandmortyapi.com/api/character', () => {
    // Devuelve una respuesta JSON mockeada
    return HttpResponse.json({
      info: { count: 2, pages: 1, next: null, prev: null },
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: { name: 'Earth (C-137)' },
          location: { name: 'Citadel of Ricks' },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
        },
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: { name: 'Earth (C-137)' },
          location: { name: 'Citadel of Ricks' },
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
        },
      ],
    })
  }),
]
