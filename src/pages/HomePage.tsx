function HomePage() {
  return (
    <section className="main-page-container">
      <header className="header">
        <img src="/hero.png" alt="rick-morty-logo" className="background-img" />
        <div className="header-content">
          <input
            type="text"
            placeholder="Buscar por nombre de personaje"
            className="w-50"
          />
        </div>
      </header>

      <section className="content">
        <h1>Body</h1>
        <h1>Body</h1>
        <h1>Body</h1>
        <h1>Body</h1>
        <h1>Body</h1>
        <h1>Body</h1>
      </section>
      <footer className="footer">
        <p>TM & © 2024 The Cartoon Network, Inc. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default HomePage
