import * as React from 'react'
import { useEffect, useState, useCallback } from 'react'
import CharacterCard from 'rick_morty_remote/CharacterCard'
import CharacterDetails from 'rick_morty_remote/CharacterDetails'
import CharactersFilters from 'rick_morty_remote/CharactersFilters'
import useCharacterStore from '../../stores/characterStore'
import type { Character } from 'rick_morty_remote/Character'
import { Spinner, Alert } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

const HomeContent: React.FC = () => {
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const {
    characters,
    loading,
    error,
    fetchCharacters,
    currentPage,
    totalPages,
    nameFilter,
    speciesFilter,
    genderFilter,
    statusFilter,
  } = useCharacterStore()
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  )

  const handleCloseDetails = () => {
    setShow(false)
    setSelectedCharacter(null)
  }
  const handleShowDetails = (characterData: Character) => {
    setSelectedCharacter(characterData)
    setShow(true)
  }

  const handlePageClick = useCallback(
    (data: { selected: number }) => {
      const newPage = data.selected + 1
      fetchCharacters(newPage)
      window.scrollTo(0, 0)
    },
    [fetchCharacters],
  )

  useEffect(() => {
    fetchCharacters(currentPage)
  }, [
    fetchCharacters,
    currentPage,
    nameFilter,
    speciesFilter,
    genderFilter,
    statusFilter,
  ])

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '80vh' }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    )
  }

  if (error && characters.length === 0) {
    return (
      <section className="content">
        <div className="d-flex justify-content-between align-items-center w-100 mt-1 mb-5">
          <div className="home-breadcrumb px-3">
            <button
              className={`btn ${activeTab === 'all' ? 'btn-success' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`btn breadcrumb-btn ${activeTab === 'favorites' ? 'btn-success' : ''}`}
              onClick={() => setActiveTab('favorites')}
            >
              Favorites
            </button>
          </div>
          <div>
            <CharactersFilters />
          </div>
        </div>
        <section className="no-characters-placeholder-container">
          <div className="no-characters-placeholder-content">
            <div>
              <h3 className="fw-bold text-center">Oh no!</h3>
              <p className="fw-bold">¡Pareces perdido en tu viaje!</p>
            </div>
            <button
              onClick={() => useCharacterStore.getState().clearAllFilters()}
              className="btn btn-light"
            >
              Limpiar filtros
            </button>
          </div>
        </section>
      </section>
    )
  }

  if (error) {
    return (
      <Alert variant="danger" className="m-4">
        Error al cargar los personajes: {error}
      </Alert>
    )
  }

  return (
    <section className="content">
      <div className="d-flex justify-content-between align-items-center w-100 mt-1 mb-5">
        <div className="home-breadcrumb px-3">
          <button
            className={`btn ${activeTab === 'all' ? 'btn-success' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`btn breadcrumb-btn ${activeTab === 'favorites' ? 'btn-success' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
        </div>
        <div>
          <CharactersFilters />
        </div>
      </div>
      {activeTab === 'all' && (
        <div className="content mt-0">
          {characters.map((character) => (
            <div className="mb-3" key={character.id}>
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
          ))}
          {selectedCharacter && (
            <CharacterDetails
              character={selectedCharacter}
              onHide={handleCloseDetails}
              show={show}
            />
          )}
          <div className="w-100 d-flex justify-content-center">
            <ReactPaginate
              breakLabel="..."
              previousLabel="<"
              nextLabel=">"
              pageCount={totalPages}
              onPageChange={handlePageClick}
              renderOnZeroPageCount={null}
              className="react-paginate"
              forcePage={currentPage - 1}
            />
          </div>
        </div>
      )}
      {activeTab === 'favorites' && <div>Favoritos</div>}
    </section>
  )
}

export default HomeContent
