import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h2>{character.name}</h2>

      <figure>
        <img src={character.image} alt={character.name}></img>
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const character = await data.json()

  return {
    paths: character.results.map((c) => {
      return { params: { slug: `${slug(c.name)}-${c.id}` } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]

  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()

  return {
    props: {
      character
    } // will be passed to the page component as props
  }
}
export default CharacterDetail
