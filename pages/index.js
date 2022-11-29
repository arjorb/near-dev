import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

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

      <Navbar />
      <main className='h-[100vh]'></main>
      <Footer />
    </div>
  );
}
