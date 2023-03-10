import Link from 'next/link'
import Head from './head'

const Home = (): JSX.Element => {
  return (
    <>
      <Head title='Home | DavWorkSpace' />
      <Link href={'/dasboard/editor/123'}>Go to Editor</Link>
    </>
  )
}

export default Home
