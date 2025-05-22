// import { useRef } from 'react'
import CharacterSearcher from 'rick_morty_remote/CharacterSearcher'
// import useCharacterStore from '../../stores/characterStore';

function HomeHeader() {
  return (
    <header className="header">
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
  )
}

export default HomeHeader
