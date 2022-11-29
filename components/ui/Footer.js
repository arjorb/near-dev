import Image from 'next/image';
import near from '../../public/near.svg';
import twitter from '../../public/twitter.svg';
import discord from '../../public/discord.svg';
import telegram from '../../public/telegram.svg';
import facebook from '../../public/facebook.svg';
import linkedin from '../../public/linkedin.svg';
import instgram from '../../public/instgram.svg';
import medium from '../../public/medium.svg';
const Footer = () => {
  return (
    <>
      <div className='max-w-screen-lg mx-auto p-4 space-y-14 text-darkCharcoal-100'>
        <h1 className='text-lg text-center tracking-wide'>
          Visit <span className='font-bold'> nearbalkans.org</span> and make sure to follow us on our social and
          community channels!
        </h1>

        <div className='max-w-screen-sm mx-auto flex justify-between'>
          <Image src={near} alt='' />
          <div className='class="border-gray-200 border-solid border-r-2 lg:mx-3 mx-1.5"'></div>
          <div className='flex gap-6'>
            <Image className='w-7 h-7' src={twitter} alt='' />
            <Image className='w-7 h-7' src={discord} alt='' />
            <Image className='w-7 h-7' src={telegram} alt='' />
            <Image className='w-7 h-9' src={facebook} alt='' />
            <Image className='w-7 h-7' src={linkedin} alt='' />
            <Image className='w-7 h-7' src={instgram} alt='' />
            <Image className='w-10 h-7' src={medium} alt='' />
          </div>
        </div>

        <div className='max-w-screen-md mx-auto flex justify-between'>
          <ul className='text-center'>
            <li>NEAR Balkans </li>
            <li>2022</li>
          </ul>
          <ul>
            <li>info@nearbalkans.org</li>
          </ul>
          <ul className='text-center'>
            <li>Privacy </li>
            <li>Policy</li>
          </ul>
          <ul className='text-center'>
            <li>Cookie </li>
            <li>Policy</li>
          </ul>
          <ul className='text-center'>
            <li>Terms & </li>
            <li>Conditions</li>
          </ul>
        </div>

        <div className='max-w-screen-lg mx-auto text-center text-lg '>
          <h1>
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, <br /> and
            Slovenia
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
