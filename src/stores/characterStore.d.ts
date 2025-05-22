import type { Character } from 'rick_morty_remote/Character';
type CharacterSpecies = string;
type CharacterGender = 'Male' | 'Female' | 'Genderless' | 'unknown' | '';
type CharacterStatus = 'Alive' | 'Dead' | 'unknown' | '';
interface CharacterState {
    characters: Character[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    nameFilter: string;
    speciesFilter: CharacterSpecies;
    genderFilter: CharacterGender;
    statusFilter: CharacterStatus;
    fetchCharacters: (page?: number) => Promise<void>;
    setNameFilter: (name: string) => void;
    setSpeciesFilter: (species: CharacterSpecies) => void;
    setGenderFilter: (gender: CharacterGender) => void;
    setStatusFilter: (status: CharacterStatus) => void;
    clearAllFilters: () => void;
}
declare const useCharacterStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CharacterState>>;
export default useCharacterStore;
