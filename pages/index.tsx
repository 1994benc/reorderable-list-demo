import type { NextPage } from 'next'
import Head from 'next/head'
import ReorderableList from '../components/ReorderableList'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Demo: Saving List Positions to Database After a Reorder</title>
        <meta name="description" content="Just a demo app - to see if it works" />
      </Head>
      <>
        <ReorderableList />
      </>
    </div>
  )
}

export default Home
