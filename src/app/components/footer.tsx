import Image from 'next/image';
// http://digibaapp.com/cpanel
// Username: digibxyn 
// Password: S2nA9Bi1^7#6
export default function Footer() {
  return (
    <footer id="project-in-mind" className="bg-gradient-to-t from-orange to-dark-orange px-8 pb-16 pt-32 relative">
      <div className="absolute xl:-top-24 xl:right-40 -top-16 right-0">
        <Image src="/static/phone-ringing-front-color.svg" className="h-48 xl:h-auto" fill alt={''} />
      </div><div className="container mx-auto grid"><h2 className="phudu-font text-8xl text-yellow text-left" >Have Project In Mind</h2><div className="grid xl:grid-cols-2 gap-12 mt-16"><div className="grid gap-6 lg:w-4/5"><div className="grid gap-4">
        <label htmlFor="your_name" className="text-5xl font-medium text-white font-urbanist flex gap-3"><span>Your Name</span><span>*</span></label>
        <input type="text" id="your_name" className="bg-white border border-white text-brown text-2xl rounded-full block w-full p-2.5 h-14" />
      </div><div className="grid gap-4"><label htmlFor="organization_name" className="text-5xl font-medium text-white font-urbanist flex gap-3"><span>Organization Name</span><span></span></label>
          <input type="text" id="organization_name" className="bg-white border border-white text-brown text-2xl rounded-full block w-full p-2.5 h-14" />
        </div><div className="grid gap-4"><label htmlFor="email" className="text-5xl font-medium text-white font-urbanist flex gap-3"><span>Email</span><span>*</span></label>
          <input type="text" id="email" className="bg-white border border-white text-brown text-2xl rounded-full block w-full p-2.5 h-14" />
        </div><div className="grid gap-4"><label htmlFor="phone" className="text-5xl font-medium text-white font-urbanist flex gap-3"><span>Phone</span><span>*</span></label>
          <input type="text" id="phone" className="bg-white border border-white text-brown text-2xl rounded-full block w-full p-2.5 h-14" />
        </div><button className="phudu-font text-5xl text-white border-solid border border-white rounded-3xl py-4 px-12 h-20 text-center hover:text-orange hover:bg-white w-4/5">Call me back</button><div className="flex flex-col gap-6 xl:pb-20"><span className="font-urbanist text-4xl font-medium text-white">OR</span><button className="flex gap-4 items-center hover:text-yellow text-white">
          <Image alt="whatsapp" className="bg-inherit" src={''} />
          <span className="text-inherit phudu-font text-5xl" >CONNECT ON WHATSAPP</span>
        </button>
        </div></div>
        <div className="xl:mt-12 grid">
          <div className="grid gap-36"><div className="grid gap-24"><div className="grid grid-rows-2 gap-8">
            <div className="phudu-font text-8xl text-yellow">+91 12340 45689</div><div className="font-urbanist text-yellow font-bold text-4xl">201, 2nd Floor, Business Park Tower M. C. Road, Andheri East, Mumbai 4000070</div>
          </div><div className="grid gap-3"><div className="font-urbanist text-yellow font-normal text-3xl">WORKING HOURS</div>
              <div className="flex flex-col"><div className="font-urbanist text-yellow font-bold text-4xl">Monday to Friday</div><div className="font-urbanist text-yellow font-bold text-4xl">10:00AM to 6:00 PM</div></div></div></div><div className="grid gap-10"><div className="grid gap-10"><div className="flex gap-6"><button>
                <Image alt="linkedin" src={''} />
              </button><button>
                  <Image alt="instagram" src={''} />
                </button>
                <button>
                  <Image alt="facebook" src={''} /></button>
                <button>
                  <Image alt="youtube" src={''} />
                </button></div></div><div><span className="phudu-font text-yellow text-8xl">CRAFTED WITH</span><div className="flex">
                  <Image alt={''} src={''} />
                  <span className="phudu-font text-yellow text-8xl">IN MUMBAI</span></div></div></div></div></div></div><div className="font-urbanist font-normal text-yellow mt-3 md:mt-0">
          ©2023 - Copyrights Reserved DigiBaapp</div></div></footer>
  )
}
