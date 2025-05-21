declare module 'rick_morty_remote/CharacterCard'
declare module 'rick_morty_remote/CharacterSearcher'
declare module 'rick_morty_remote/CharactersFilters'
declare module 'rick_morty_remote/CharacterDetails'
// declare module 'rick_morty_remote/Characters'
// ✨ ¡Aquí es donde declaras el módulo de las interfaces! ✨
// Usa el mismo nombre que usaste en la sección 'exposes' de tu remoto/vite.config.ts
// Y dentro del bloque, declara las interfaces que exporta ese módulo.
declare module 'rick_morty_remote/Character' {
  // Asegúrate de que estas interfaces coincidan exactamente con las definidas en
  // remoto/src/types/Character.ts
  export interface Character {
    id: number
    name: string
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    type: string
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    origin: {
      name: string
      url: string
    }
    location: {
      name: string
      url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
  }

  export interface Info {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }

  export interface ApiResponse {
    info: Info
    results: Character[]
  }

  // ✨ Importante: Si agregaste `export const __EXPOSE_TYPES__ = {};` en el remoto,
  // también debes declararlo aquí para que TypeScript lo sepa.
  // Esto es un "dummy" para que el bundler no considere el chunk vacío.
  export const __EXPOSE_TYPES__: {}
}
