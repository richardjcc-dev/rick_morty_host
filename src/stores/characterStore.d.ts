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
    count: number;
    nameFilter: string;
    speciesFilter: CharacterSpecies;
    genderFilter: CharacterGender;
    statusFilter: CharacterStatus;
    favorites: Character[];
    fetchCharacters: (page?: number) => Promise<void>;
    setNameFilter: (name: string) => void;
    setSpeciesFilter: (species: CharacterSpecies) => void;
    setGenderFilter: (gender: CharacterGender) => void;
    setStatusFilter: (status: CharacterStatus) => void;
    clearAllFilters: () => void;
    addFavorite: (character: Character) => void;
    removeFavorite: (characterId: number) => void;
    isFavorite: (characterId: number) => boolean;
}
declare const useCharacterStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<CharacterState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<CharacterState, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: CharacterState) => void) => () => void;
        onFinishHydration: (fn: (state: CharacterState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<CharacterState, unknown>>;
    };
}>;
export default useCharacterStore;
