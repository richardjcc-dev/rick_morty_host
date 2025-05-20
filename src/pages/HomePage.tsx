import HomeHeader from '../components/home-page/HomeHeader'
import HomeContent from '../components/home-page/HomeContent'
import HomeFooter from '../components/home-page/HomeFooter'

function HomePage() {
  return (
    <section className="main-page-container">
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </section>
  )
}

export default HomePage
