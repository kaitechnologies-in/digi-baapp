'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Services() {
  const router = useRouter();
  return (
    <section id="services" className=" relative">
      <div className="absolute -top-32 lg:right-40 left-3/4">
        <Image className='relative-image' src='./service/target-dynamic-gradient.svg' alt='' fill />
      </div>
      <div className="absolute top-28 right-0 hidden md:block">
        <Image className='relative-image' src='./service/wifi-dynamic-gradient.svg' alt='' fill />
      </div>
      <div className="absolute -bottom-12 -left-8 hidden md:block">
        <Image className='relative-image' src='./service/bucket-dynamic-gradient.svg' alt='' fill />
      </div>
      <div className="grid gap-14 place-items-center container mx-auto relative">
        <div className="absolute -top-8 left-0 hidden md:block">
          <Image className='relative-image' src='./service/megaphone-dynamic-gradient.svg' alt='' fill />
        </div>
        <div className="absolute -bottom-32 right-[10%] hidden lg:block">
          <Image className='relative-image' src='./service/thumb-up-dynamic-gradient.svg' alt='' fill />
        </div>
        <h2 className="phudu-font heading-service text-center" >Services</h2>
        <div className="grid lg:grid-cols-4 gap-7 mt-8">
          <div className="bg-creamy py-16 px-10 flex flex-col gap-7 justify-center rounded-3xl items-center col-span-2 text-center">
            <span className="phudu-font text-5xl text-zeus uppercase">BRAND BOOSt</span>
            <span className="text-center font-urbanist text-4xl font-normal service-text">Elevate your brand identity to its full potential by harnessing the true power of branding.</span>
          </div>
          <div className="bg-creamy py-16 px-10 flex flex-col gap-7 justify-center rounded-3xl items-center col-span-2 text-center">
            <span className="phudu-font text-5xl text-zeus uppercase">WEB Craft</span>
            <span className="text-center font-urbanist text-4xl font-normal service-text">Transforming visions into compelling websites. Our design expertise, your online success.</span>
          </div>
          <div className="bg-creamy py-16 px-10 flex flex-col gap-7 justify-center rounded-3xl items-center col-span-2 text-center">
            <span className="phudu-font text-5xl text-zeus uppercase">DIGI Marketing</span>
            <span className="text-center font-urbanist text-4xl font-normal service-text">We tailor strategies for growth, from SEO to social media, driving results and ROI.</span>
          </div>
          <div className="bg-creamy py-16 px-10 flex flex-col gap-7 justify-center rounded-3xl items-center col-span-2 text-center">
            <span className="phudu-font text-5xl text-zeus uppercase">PR BAAP</span>
            <span className="text-center font-urbanist text-4xl font-normal service-text">We craft compelling stories and strategies that drive influence and boost your reputation</span>
          </div>
        </div>
        <div className="relative">
          <button className="phudu-font text-5xl text-orange border-solid border border-orange rounded-3xl py-4 px-12 h-auto  text-center hover:text-white hover:bg-orange max-w-3xl sm:max-w-full" onClick={() => router.push('/pages/services')}>Explore All Services</button>
          <div className="absolute -left-36 -bottom-24 hidden lg:block">
            <Image className='relative-image' src='./service/mic-dynamic-gradient.svg' alt='' fill />
          </div>
        </div>
      </div>
    </section>
  )
}
