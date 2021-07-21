import Header from '../Header'
import Hero from '../Hero'
import Projects from '../Projects'
import Footer from '../Footer'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
