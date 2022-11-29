import Link from 'next/link';
import Image from 'next/image';
import dacade from '../../public/dacade.svg';
import near from '../../public/near.svg';
import nears from '../../public/nears.svg';

const Navbar = () => {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 max-w-screen-lg mx-auto p-4 h-20  flex justify-between items-center'>
        {/* Logo  */}
        <div className='flex'>
          <div>
            <Link href='/decade' className='flex items-center gap-2'>
              <Image className='w-10' src={dacade} alt='' />
              <p className='font-bold text-darkCharcoal-300'>Dacade</p>
            </Link>
          </div>
          <div className='class="border-gray-200 border-solid border-r-2 lg:mx-3 mx-1.5"'></div>
          <div>
            <Link href='/near'>
              <Image className='w-30' src={near} alt='' />
            </Link>

            <Link href={'/near'} className='lg:hidden'>
              <Image className='w-10' src={nears} alt='' />
            </Link>
          </div>
        </div>

        {/* Nav  */}
        <div className='flex gap-14 items-center'>
          <Link href={'/'} className='text-lg tracking-wide'>
            Start The Course
          </Link>
          <Link href={'/'} className=' bg-darkCharcoal-500 text-white text-lg  px-6 py-2 rounded-full tracking-wide '>
            Create wallet
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
