import CharacterSearcher from 'rick_morty_remote/CharacterSearcher'
import CharacterCard from 'rick_morty_remote/CharacterCard'

function HomePage() {
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
        <CharacterCard />
        <CharacterCard />
      </section>
      <footer className="footer">
        <p>TM & © 2024 The Cartoon Network, Inc. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default HomePage
