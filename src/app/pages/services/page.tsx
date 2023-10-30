import Image from 'next/image';

export default function Services() {
  return (
    <div className='bg-white pb-4 pt-32'>
      <div className="grid gap-14 place-items-center container mx-auto relative">
        <h2 className="phudu-font heading-service text-center uppercase" >Services We offer</h2>
        <div className="container grid lg:grid-cols-4 gap-7 mt-8 px-8">
          <div className="bg-service-yellow py-16 px-10 flex flex-col gap-7  rounded-3xl  col-span-2">
            <span className="phudu-font text-5xl text-zeus uppercase">BRAND BOOSt</span>
            <span className="font-urbanist text-4xl font-normal services-text">
              <li>Logo Designing </li>
              <li>
                Brand Book</li>
              <li>
                Package Designing</li>
              <li>
                Marketing Collateral</li>
              <li>
                Video Creation</li>
            </span>
          </div>
          <div className="bg-service-yellow py-16 px-10 flex flex-col gap-7  rounded-3xl  col-span-2">
            <span className="phudu-font text-5xl text-zeus uppercase">WEB Craft</span>
            <span className=" font-urbanist text-4xl font-normal service-text services-text">
              <li>
                Static Website</li>
              <li>
                Dynamic Website</li>
              <li>
                E-commerce Website
              </li>
            </span>
          </div>
        </div>
        <div className='container grid lg:grid-cols-4 brand-bg py-8'>
          <div className="  gap-7  rounded-3xl items-center col-span-2 text-center">
            <span className="phudu-font  text-serv uppercase">Looking for Design Partner</span>
          </div>
          <div className="  gap-7  rounded-3xl items-center col-span-2 text-center">
            <span className="phudu-font  text-serv uppercase">Get In touch</span>
          </div>
        </div>
        <div className="container grid lg:grid-cols-4 gap-7 mt-8 px-8">
          <div className="bg-service-yellow py-16 px-10 flex flex-col gap-7  rounded-3xl  col-span-2 ">
            <span className="phudu-font text-5xl text-zeus uppercase">DIGI Marketing</span>
            <span className=" font-urbanist text-4xl font-normal service-text services-text">
              <li>
                Social Media Marketing</li>
              <li>
                Google Ads</li>
              <li>
                Meta Ads</li>
              <li>
                LinkedIn Marketing</li>
              <li>
                Influencer Marketing</li>

            </span>      </div>
          <div className="bg-service-yellow py-16 px-10 flex flex-col gap-7  rounded-3xl  col-span-2 ">
            <span className="phudu-font text-5xl text-zeus uppercase">PR BAAP</span>
            <span className=" font-urbanist text-4xl font-normal services-text">
              <li>
                Digital PR</li>
              <li>
                Awards
              </li>
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-36 -bottom-24 hidden lg:block">
            <Image className='relative-image' src='./service/mic-dynamic-gradient.svg' alt='' fill />
          </div>
        </div>
      </div></div>
  )
}
