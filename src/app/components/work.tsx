'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
// http://digibaapp.com/cpanel
// Username: digibxyn 
// Password: S2nA9Bi1^7#6
export default function Work() {
  const router = useRouter()
  return (
    <div className='bg-white'>
      <div className='heading'>
        Work
      </div>
      <div className='grid lg:grid-cols-3 lg:gap-7 gap-10'>
        <div className="lg:col-span-2 grid lg:grid-cols-2 gap-7 relative">
          <div className="md:col-span-2 grid md:grid-cols-2 gap-7 place-items-center relative">
            <div className='relative group'>
              <Image src="/package_design.svg" className="cursor-pointer work-image" fill alt='' />
              <div className="h-auto opacity-0 group-hover:opacity-90 duration-300 animate-fade absolute left-8 bottom-8 right-8 top-8 z-10 flex justify-center items-center text-xl bg-white text-black rounded-xl">PACKAGE DESIGN</div>
            </div>
            <div className='relative group'>
              <Image src="/logo_design.svg" className="cursor-pointer work-image" fill={true} alt='' />
              <div className="h-auto opacity-0 group-hover:opacity-90 duration-300 animate-fade absolute left-8 bottom-8 right-8 top-8 z-10 flex justify-center items-center text-xl bg-white text-black rounded-xl">LOGO DESIGN</div>
            </div>
            <div className='relative group'>
              <Image src="/print_media_design.svg" className="cursor-pointer work-image" fill={true} alt='' />
              <div className="h-auto opacity-0 group-hover:opacity-90 duration-300 animate-fade absolute left-8 bottom-8 right-8 top-8 z-10 flex justify-center items-center text-xl bg-white text-black rounded-xl">PRINT MEDIA DESIGN</div>
            </div>
            <div className='relative group'>
              <Image src="/project_tile.png" className="cursor-pointer work-image" fill={true} alt='' />
              <div className="h-auto opacity-0 group-hover:opacity-90 duration-300 animate-fade absolute left-8 bottom-8 right-8 top-8 z-10 flex justify-center items-center text-xl bg-white text-black rounded-xl">ANIMATION & VIDEO</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-rows-1 place-items-center">
          <div className="relative place-self-center row-span-1 hidden lg:block">
            <div className="absolute top-36 left-48 h-[135px] w-[135px]">

              <Image className='z-[1]' src="/rocket-dynamic-color.svg" fill alt='' /> </div>
            <div >
              <Image className='relative-image' src="/picture-dynamic-color.svg" fill alt='' />
            </div>
            <div className="absolute top-0">
              <Image className='relative-image h-full w-full' src="/paint-brush-dynamic-color.svg" fill alt='' />
            </div>
          </div>
          <div>
            <button className="view-project border-solid border border-orange rounded-3xl py-4 px-4 h-auto  text-center hover:text-white hover:bg-orange max-w-3xl sm:max-w-full" onClick={() => router.push('/pages/work')}>View all Projects</button>
          </div>
        </div>
      </div>
    </div>


  )
}
