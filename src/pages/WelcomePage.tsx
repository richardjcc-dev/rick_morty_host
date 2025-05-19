import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <section className="home-page-container">
      <div className="gradient-background">
        <div className="home-page-content text-center gap-2">
          <img
            src="/logo/logo.svg"
            alt="rick-morty-logo"
            className="background-img"
          />
          <h3>Bienvenido a Rick and Morty</h3>
          <p>
            En esta prueba, evaluaremos su capacidad para construir la
            aplicación mediante el análisis de código y la reproducción del
            siguiente diseño.
          </p>
          <Link to={'/home'} className="btn btn-success">
            Comenzar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WelcomePage
