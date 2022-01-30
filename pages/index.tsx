import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}

export default Home
