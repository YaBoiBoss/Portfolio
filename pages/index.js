import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Result from '../components/Result'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Bos5 Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* NavBar */}
      <NavBar />
      {/* Results */}
      <Result results={results} />
    </div>
  )
}

export async function getServerSideProps(context){

  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url}`
    ).then(res => res.json());

    return {
      props: {
        results: request.results,
      }
    }
}