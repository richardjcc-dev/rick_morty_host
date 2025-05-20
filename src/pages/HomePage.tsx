import { useState } from 'react'
import CharacterSearcher from 'rick_morty_remote/CharacterSearcher'
import CharacterCard from 'rick_morty_remote/CharacterCard'
import CharacterDetails from 'rick_morty_remote/CharacterDetails'
import CharactersFilters from 'rick_morty_remote/CharactersFilters'

function HomePage() {
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
    <section className="main-page-container">
      <header className="header py-2">
        <img src="/hero.png" alt="rick-morty-logo" className="background-img" />
        <div className="header-content">
          <img
            src="/logo/logo.svg"
            alt="rick-morty-logo"
            className="rick-morty-logo"
          />
          <CharacterSearcher />
        </div>
      </header>

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
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
            </div>
            <div className="mb-3">
              <CharacterCard
                onClick={handleShowDetails}
                character={character}
              />
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
      <footer className="footer">
        <p>TM & © 2024 The Cartoon Network, Inc. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default HomePage
