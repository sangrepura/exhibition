import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'


export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);

  // For scrollbar:
  // thin scrollbar-thumb-rounded-full 
  // scrollbar-thumb-[#cccccc] scrollbar-track-[#eeeeee] hover:scrollbar-thumb-[#aaaaaa]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.67,0.09,0.5,0.92]}}
      className="relative bg-[#eeeeee] text-gray-800 h-screen overflow-x-hidden overflow-y-scroll z-0
      scrollbar-none
    ">
      <Head>
        <meta name="keywords" content="portfolio, exhibition, seancfong, software developer, computer science" />
        <meta name="description" content="Minimal software developer portfolio site, constructed by Sean Collan Fong." />
        <meta name="author" content="Sean Collan Fong" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exhibition | seancfong</title>
      </Head>

      {/* Header */}
      <Header mode={heroInView}/>

      {/* Hero */}
      <section id="hero" ref={heroRef}>
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>
    
      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact">

      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </motion.div>

    
  )
}
