import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
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
  count: number

  nameFilter: string
  speciesFilter: CharacterSpecies
  genderFilter: CharacterGender
  statusFilter: CharacterStatus

  favorites: Character[]

  fetchCharacters: (page?: number) => Promise<void>

  setNameFilter: (name: string) => void
  setSpeciesFilter: (species: CharacterSpecies) => void
  setGenderFilter: (gender: CharacterGender) => void
  setStatusFilter: (status: CharacterStatus) => void
  clearAllFilters: () => void

  addFavorite: (character: Character) => void
  removeFavorite: (characterId: number) => void
  isFavorite: (characterId: number) => boolean
}

const useCharacterStore = create<CharacterState>()(
  persist(
    (set, get) => ({
      characters: [],
      loading: false,
      error: null,
      currentPage: 1,
      totalPages: 1,
      count: 0,

      nameFilter: '',
      speciesFilter: '',
      genderFilter: '',
      statusFilter: '',
      favorites: [],

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
            count: response.data.info.count,
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
                count: 0,
              })
            } else {
              set({ error: err.message, loading: false })
            }
          } else {
            set({ error: 'An unexpected error occurred', loading: false })
          }
        }
      },

      addFavorite: (character: Character) => {
        set((state) => {
          if (!state.favorites.some((fav) => fav.id === character.id)) {
            return { favorites: [...state.favorites, character] }
          }
          return state
        })
      },
      removeFavorite: (characterId: number) => {
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== characterId),
        }))
      },
      isFavorite: (characterId: number) => {
        return get().favorites.some((fav) => fav.id === characterId)
      },
    }),
    {
      name: 'rick-morty-favorites-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favorites: state.favorites }),
    },
  ),
)

export default useCharacterStore
