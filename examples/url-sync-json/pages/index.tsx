import Head from 'next/head'
import Link from 'next/link'

import { Counter } from '../src/components/Counter'
import { Textfield } from '../src/components/Textfield'
import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example of RecoilURLSyncJSONNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Top page (Static)</h1>
        <Textfield />
        <Counter name="foo" initialValue={0} />
        <Counter name="bar" initialValue={10} />
        <Counter name="baz" initialValue={100} />
        <ul>
          <li>
            <Link href="/articles/1">article 1</Link>
          </li>
          <li>
            <Link href="/articles/2">article 2</Link>
          </li>
          <li>
            <Link href="/articles/3">article 3</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
