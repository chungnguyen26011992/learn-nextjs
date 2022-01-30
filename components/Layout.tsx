import type { NextPage } from 'next'
import Footer from './Footer'
import Navbar from './Navbar'

/**
 * children is everything inside <Layout></Layout>
 * See 2:25 https://www.youtube.com/watch?v=DGn25s42NvQ&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=5 
 */
const Layout: NextPage = ({ children }) => {
  return (
    <div className="content">
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default Layout
