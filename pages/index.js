import Layout from '../components/layout'
import Head from 'next/head';

function HomePage() {
  return (
    <Layout>
        <Head>
            <title>Anasayfa</title>
        </Head>

        <div>
          <h1>Welcome to Next.js!</h1>
        </div>
    </Layout>
  )
}

export default HomePage
