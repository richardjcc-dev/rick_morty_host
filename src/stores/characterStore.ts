import { create } from 'zustand'
import axios from 'axios'
import type { Character, ApiResponse } from 'rick_morty_remote/Character'

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

const useCharacterStore = create<CharacterState>((set, get) => ({
  characters: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,

  nameFilter: '',
  speciesFilter: '',
  genderFilter: '',
  statusFilter: '',

  setNameFilter: (name: string) => {
    set({ nameFilter: name, currentPage: 1 })
  },

  setSearchTerm: (term: string) => {
    set({ nameFilter: term, currentPage: 1 })
  },

  setSpeciesFilter: (species: CharacterSpecies) => {
    set({ speciesFilter: species, currentPage: 1 })
  },
  setGenderFilter: (gender: CharacterGender) => {
    set({ genderFilter: gender, currentPage: 1 })
  },
  setStatusFilter: (status: CharacterStatus) => {
    set({ statusFilter: status, currentPage: 1 })
  },

  clearAllFilters: () => {
    set({
      nameFilter: '',
      speciesFilter: '',
      genderFilter: '',
      statusFilter: '',
      currentPage: 1,
    })
  },

  fetchCharacters: async (page = 1) => {
    set({ loading: true, error: null })

    const state = get()
    const { nameFilter, speciesFilter, genderFilter, statusFilter } = state

    let url = `https://rickandmortyapi.com/api/character?page=${page}`

    if (nameFilter) {
      url += `&name=${nameFilter}`
    }
    if (speciesFilter) {
      url += `&species=${speciesFilter}`
    }
    if (genderFilter) {
      url += `&gender=${genderFilter}`
    }
    if (statusFilter) {
      url += `&status=${statusFilter}`
    }

    try {
      const response = await axios.get<ApiResponse>(url)
      set({
        characters: response.data.results,
        loading: false,
        currentPage: page,
        totalPages: response.data.info.pages,
      })
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          set({
            characters: [],
            loading: false,
            error: 'No se encontraron personajes',
            totalPages: 1,
            currentPage: 1,
          })
        } else {
          set({ error: err.message, loading: false })
        }
      } else {
        set({ error: 'An unexpected error occurred', loading: false })
      }
    }
  },
}))

export default useCharacterStore
