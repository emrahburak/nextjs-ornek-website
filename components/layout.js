import Navigation from './navigation'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>

      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
