import { type NextPage } from 'next'

import Link from 'next/link'
import Head from './head'

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head title='Home | DavWorkSpace' />
      <Link href={'/editor'}>Go to Editor</Link>
    </>
  )
}

export default Home
