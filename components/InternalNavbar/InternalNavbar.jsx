import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export const InternalNavbar = () => {
  return (
    <section className='flex flex-row justify-between items-center border border-white'>
  <Link href='./'>
    <Image src='./logo-b.svg' alt='Logo' width={80} height={80} />
  </Link>

  <div className='flex flex-row items-center border border-white px-4 py-2 rounded-lg bg-gray-800'> 
    <div className='gema-container mr-2'> 
      <Image src='/gamification/gema.png' alt='Gema' width={50} height={50} />
      <span className='text-white ml-2 font-medium'> x10 </span> 
    </div>
    <Image src='/artist/artist.jpeg' alt='Logo' width={50} height={50} objectFit='cover' className='rounded-full' />
  </div>
</section>

  );
}

export default InternalNavbar;
