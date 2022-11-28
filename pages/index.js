import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>NEAR dev 101</title>
        <meta
          name='description'
          content='We, in NEAR Balkans, know how important it is to have regional and local support.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <h1 className='text-3xl text-center text-[#03a09e] underline'>
          Welcome to <Link href='/'>NEAR dev!</Link>
        </h1>
      </main>
    </div>
  );
}
