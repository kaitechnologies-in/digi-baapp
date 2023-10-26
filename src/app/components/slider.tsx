import Image from 'next/image'
// http://digibaapp.com/cpanel
// Username: digibxyn 
// Password: S2nA9Bi1^7#6
export default function Slider() {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-hidden">
        <video loop muted autoPlay className="h-full w-full object-fill" width={800} src="./video/background.mp4" ></video>
      </div>
      <div id="default-carousel" className=" h-screen w-screen" data-carousel="slide">
        <div className="relative overflow-hidden rounded-lg justify-center flex items-center  h-screen w-screen container mx-auto ">
          <div className="duration-700 ease-in-out text-center" data-carousel-item>
            <div className='slider-main-text'>
              Elevate, Engage, Evolve
            </div >
            <div className='slider-sub-text'>The Digital Trinity</div>
          </div>
        </div>

        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <Image src="./left.svg" width={44} height={44} alt="..." />
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <Image src="./right.svg" width={44} height={44} alt="..." />
        </button>
      </div>
    </div>
  )
}
