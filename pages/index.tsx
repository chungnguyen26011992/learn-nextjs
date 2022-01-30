import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}

export default Home
