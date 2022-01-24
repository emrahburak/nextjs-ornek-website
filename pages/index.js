import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link';
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ character }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>

      <div>
        <h2>Rick And Morty</h2>
      </div>

      <ul>
        {character.results.map((c) => (
          <li key={c.id}>
            <Link href="/character/[slug]" as={`/character/${slug(c.name)}-${c.id}`}>
            <a>{c.name}</a>
            </Link>
            </li>
        ))}
      </ul>
    </Layout>
  )
}




export async function getStaticProps(context) {
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const character = await data.json()

  return {
    props: {
      character
    } // will be passed to the page component as props
  }
}
export default HomePage
