import Work from './components/work'
import Services from './components/services'
import PrAndMedia from './components/pr_media'
import About from './components/about'
import Contact from './components/contact'
import NewsBlogs from './components/news_blogs'
import Slider from './components/slider'
import Trust from './components/trust'
import Clients from './components/clients'
import Industries from './components/industries'
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className='h-screen w-full gap-3 relative'>
        <Slider />
      </section>
      <section className='px-8 py-11'>
        <Work />
      </section>
      <section className='brand-bg px-8 py-11'>
        <Trust />
      </section>
      <section className='px-8 py-11'>
        <Clients />
      </section>
      <section className='bg-yellow px-8 py-11 pb-32'>
        <Services />
      </section>
      <section className='bg-industry px-8 py-11 pb-32'>
        <Industries />
      </section>
      <section>
        <PrAndMedia />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <NewsBlogs />
      </section>

    </main>
  )
}
