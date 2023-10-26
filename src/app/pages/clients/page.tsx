import Image from 'next/image';
// http://digibaapp.com/cpanel
// Username: digibxyn 
// Password: S2nA9Bi1^7#6
export default function Clients() {
  return (
    <div className='bg-white px-8 pb-4 pt-32'>

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
    
    </div>
  )
}
