import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <Footer />
    </div>
  )
}

export default Home
