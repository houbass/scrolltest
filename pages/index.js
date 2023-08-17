import Head from 'next/head'

//components
import Topic1 from '@/components/Topic1'

export default function Home() {


  return (
    <>
      <Head>
        <title>scroll test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Topic1 />
        </div>
      </main>
    </>
  )
}
