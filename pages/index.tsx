import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);

  // For scrollbar:
  // thin scrollbar-thumb-rounded-full 
  // scrollbar-thumb-[#cccccc] scrollbar-track-[#eeeeee] hover:scrollbar-thumb-[#aaaaaa]

  return (
    <div 
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

      </section>

      {/* Contact */}
      <section id="contact">

      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>

    
  )
}
