import Image from 'next/image'
// http://digibaapp.com/cpanel
// Username: digibxyn 
// Password: S2nA9Bi1^7#6
export default function Achievements() {
  return (
    <div className="container mx-auto grid gap-y-36 place-items-center relative">
      <div className="absolute hidden lg:block lg:-left-20 lg:-top-10 xl:left-0 xl:-top-10">
        <Image alt="star-forward" src={''} />
      </div>
      <div className="absolute xl:left-40 xl:top-10 hidden lg:block lg:left-20 lg:top-10">
        <Image alt="star-backward-blur" src={''} />
      </div>
      <div className="absolute xl:right-40 xl:top-10 hidden lg:block lg:right-20 lg:top-10">
        <Image alt="star-backward" src={''} />
      </div>
      <div className="absolute xl:right-0 xl:top-24 hidden lg:block lg:top-28 lg:-right-10">
        <Image alt="star-forward-blur" src={''} />
      </div>
      <div className="relative">
        <h2 className="phudu-font text-8xl text-orange text-center" >Achievements</h2>
        <div className="absolute md:-top-[3.3rem] md:-left-10 -top-[3.6rem] -left-[2.9rem]">
          <Image className="h-24 w-24 md:h-auto md:w-auto" alt="crown" src={''} />
        </div>
      </div>
      <div className="absolute xl:right-16 xl:top-48 hidden xl:block">
        <Image alt="camera" src={''} />
      </div>
      <div className="grid place-items-center lg:grid-cols-2 gap-32 relative">
        <Image alt="thumb" className="absolute lg:-left-40 lg:-bottom-32 hidden lg:block" src={''} />
        <div className="grid gap-12 place-items-center">
          <div>
            <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
              <div >
                <Image alt="" role="presentation" aria-hidden="true" src={''} />
              </div>
              <div aria-hidden="true" data-placeholder-image="" >
              </div>
            </div>
            <div aria-hidden="true" data-placeholder-image="" >
            </div>
          </div>
          <span className="font-urbanist text-dark-brown font-extrabold text-4xl text-center">Media Award 2023</span>
        </div>
      </div>
      <div className="grid gap-12 place-items-center"><div>
        <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <div >
            <Image alt="" role="presentation" aria-hidden="true" src={''} />
          </div><div aria-hidden="true" data-placeholder-image="" ></div>
        </div>
      </div>
        <div className="grid grid-rows-2 gap-2 place-items-center"><div><div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained"><div >
          <Image alt="" role="presentation" aria-hidden="true" src={''} />
        </div><div aria-hidden="true" data-placeholder-image="" ></div>
        </div>
        </div>
        <span className="font-urbanist text-dark-brown font-extrabold text-4xl text-center">Branding Award 2022</span>
        </div>
      
        </div>
        <button className="phudu-font text-5xl text-orange border-solid border border-orange rounded-3xl py-4 px-12 h-auto  text-center hover:text-white hover:bg-orange max-w-3xl sm:max-w-full">Explore all Achiements</button></div >
  )
}
