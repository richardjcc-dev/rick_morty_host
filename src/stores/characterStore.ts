import { create } from 'zustand'
import axios from 'axios'
import type { Character, ApiResponse } from 'rick_morty_remote/Character'

interface CharacterState {
  characters: Character[]
  loading: boolean
  error: string | null
  fetchCharacters: () => Promise<void>
  currentPage: number
  totalPages: number
  nextPage: string | null
  prevPage: string | null
  goToPage: (pageUrl: string) => Promise<void>
}

const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  nextPage: null,
  prevPage: null,

  fetchCharacters: async () => {
    set({ loading: true, error: null })
    try {
      const response = await axios.get<ApiResponse>(
        'https://rickandmortyapi.com/api/character',
      )
      set({
        characters: response.data.results,
        loading: false,
        currentPage: 1,
        totalPages: response.data.info.pages,
        nextPage: response.data.info.next,
        prevPage: response.data.info.prev,
      })
    } catch (err) {
      if (axios.isAxiosError(err)) {
        set({ error: err.message, loading: false })
      } else {
        set({ error: 'An unexpected error occurred', loading: false })
      }
    }
  },

  goToPage: async (pageUrl: string) => {
    if (!pageUrl) return
    set({ loading: true, error: null })
    try {
      const response = await axios.get<ApiResponse>(pageUrl)
      const url = new URL(pageUrl)
      const pageNumber = parseInt(url.searchParams.get('page') || '1', 10)

      set({
        characters: response.data.results,
        loading: false,
        currentPage: pageNumber,
        totalPages: response.data.info.pages,
        nextPage: response.data.info.next,
        prevPage: response.data.info.prev,
      })
    } catch (err) {
      if (axios.isAxiosError(err)) {
        set({ error: err.message, loading: false })
      } else {
        set({ error: 'An unexpected error occurred', loading: false })
      }
    }
  },
}))

export default useCharacterStore
