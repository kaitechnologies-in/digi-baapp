'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
// http://digibaapp.com/cpanel
// Username: digibxyn 
// Password: S2nA9Bi1^7#6
export default function Clients() {
  const router = useRouter()
  return (
    <div className="container mx-auto grid gap-y-9 place-items-center">
      <h2 className="heading text-center" >Clients</h2>
      <div>
        <div className="grid gap-x-10 lg:grid-cols-6 md:grid-cols-3 place-content-baseline place-items-center grid-cols-2">
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/cona.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/farmi.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/plugin.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/cygnus.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/ocean.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/platess.svg' />
        </div>
        <div className="grid gap-x-10 lg:grid-cols-5 md:grid-cols-3 place-content-baseline place-items-center grid-cols-2">
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/femina.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/volo.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/panbai.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/al-asheer.svg' />
          <Image className="w-full aspect-square object-contain relative-image" alt="client" fill src='./clients/treasure.svg' />
        </div>
      </div>
      <div>
        <button className="phudu-font view-project text-5xl text-orange border-solid border border-orange rounded-3xl py-4 px-12 h-auto  text-center hover:text-white hover:bg-orange max-w-3xl sm:max-w-full" onClick={() => router.push('/clients')}>View all Clients</button>
      </div>
    </div>
  )
}
