import Image from 'next/image'
export default function Industries() {
  return (
    <div className="grid gap-y-20 container mx-auto place-items-center">
      <h2 className="phudu-font text-8xl industry-head text-center uppercase">Industries we serve</h2>
      <div className="grid grid-cols-4 xl:grid-cols-12 md:grid-cols-6 border-2 border-light-brown rounded-3xl  [&amp;>*:nth-child(6)]:border-r-0 [&amp;>*:nth-child(6)]:border-t-0  [&amp;>*:nth-child(7)]:border-l-0 [&amp;>*:nth-child(7)]:border-b-0  [&amp;>*:nth-child(3)]:border-r-0 [&amp;>*:nth-child(3)]:border-t-0  [&amp;>*:nth-child(10)]:border-l-0 [&amp;>*:nth-child(10)]:border-b-0  [&amp;>*:nth-child(12)]:border-l-0 [&amp;>*:nth-child(2)]:border-r-0 [&amp;>*:nth-child(2)]:border-t-0 [&amp;>*:nth-child(11)]:border-l-0 [&amp;>*:nth-child(11)]:border-b-0 "><div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0">
        <div>
          <Image className="w-full aspect-square object-contain" alt="industry-Health Care and Fitness" src='./industries/stethoscope.svg' fill />
        </div>
        <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Health Care and Fitness</span>
      </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0">
          <div>
            <Image className="w-full aspect-square object-contain" alt="industry-Beauty and Skin Care" src='./industries/spa.svg' fill />
          </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Beauty and Skin Care</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Real Estate" src='./industries/construction.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Real Estate</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0">
          <div>
            <Image className="w-full aspect-square object-contain" alt="industry-Restaurant / Hotels" src='./industries/concierge.svg' fill />
          </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Restaurant / Hotels</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Education" src='./industries/school.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Education</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Lifestyle and Entertainment" src='./industries/attractions.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Lifestyle and Entertainment</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-B2B Enterprises" src='./industries/clinical_notes.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">B2B Enterprises</span>
        </div><div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Personalities" src='./industries/clinical_notes.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Personalities</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Travel and Hospitalities" src='./industries/airplane_ticket.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Travel and Hospitalities</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Logistics" src='./industries/local_shipping.svg' fill />
        </div><span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Logistics</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Interior and Architect" src='./industries/square_foot.svg' fill /></div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Interior and Architect</span>
        </div>
        <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0"><div>
          <Image className="w-full aspect-square object-contain" alt="industry-Manufacturing" src='./industries/domain.svg' fill />
        </div>
          <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">Manufacturing</span>
        </div>
      </div>
      <div>
        <button className="phudu-font text-5xl text-orange border-solid border border-orange rounded-3xl py-4 px-12 h-auto  text-center hover:text-white hover:bg-orange max-w-3xl sm:max-w-full">Explore All Industries</button>
      </div>
    </div>
  )
}
