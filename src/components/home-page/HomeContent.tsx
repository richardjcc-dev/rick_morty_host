import { useState } from 'react'
import CharacterCard from 'rick_morty_remote/CharacterCard'
import CharacterDetails from 'rick_morty_remote/CharacterDetails'
import CharactersFilters from 'rick_morty_remote/CharactersFilters'

function HomeContent() {
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  // const [selectedCharacter, setSelectedCharacter] = useState({})

  const handleCloseDetails = () => setShow(false)
  const handleShowDetails = () => setShow(true)

  const character = {
    name: 'Rick Sanchez',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    location: 'Citadel of Ricks',
    origin: 'Pilot',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
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
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>
          <div className="mb-3">
            <CharacterCard onClick={handleShowDetails} character={character} />
          </div>

          <CharacterDetails
            character={character}
            onHide={handleCloseDetails}
            show={show}
          />
        </div>
      )}
      {activeTab === 'favorites' && <div>Favoritos</div>}
    </section>
  )
}

export default HomeContent
