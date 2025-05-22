declare module 'rick_morty_remote/CharacterCard'
declare module 'rick_morty_remote/CharacterSearcher'
declare module 'rick_morty_remote/CharactersFilters'
declare module 'rick_morty_remote/CharacterDetails'
declare module 'rick_morty_remote/Character' {
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
  export const __EXPOSE_TYPES__: {}
}

declare module 'rick_morty_remote/store/characterStore' {
  import { StoreApi } from 'zustand'
  import { Character } from 'rick_morty_remote/Character'

  type CharacterSpecies = string
  type CharacterGender = 'Male' | 'Female' | 'Genderless' | 'unknown' | ''
  type CharacterStatus = 'Alive' | 'Dead' | 'unknown' | ''

  interface CharacterState {
    characters: Character[]

    loading: boolean
    error: string | null

    currentPage: number
    totalPages: number

    nameFilter: string
    speciesFilter: CharacterSpecies
    genderFilter: CharacterGender
    statusFilter: CharacterStatus

    fetchCharacters: (page?: number) => Promise<void>

    setNameFilter: (name: string) => void
    setSpeciesFilter: (species: CharacterSpecies) => void
    setGenderFilter: (gender: CharacterGender) => void
    setStatusFilter: (status: CharacterStatus) => void
    clearAllFilters: () => void
  }

  const useCharacterStore: (() => CharacterState) & StoreApi<CharacterState>
  export default useCharacterStore
}
