import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Skills from '../components/Skills'

export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);

  return (
    <div 
      className="relative bg-[#eeeeee] text-gray-800 h-screen overflow-x-hidden overflow-y-scroll z-0
      scrollbar-thin scrollbar-thumb-rounded-full 
    scrollbar-thumb-[#cccccc] scrollbar-track-[#eeeeee] hover:scrollbar-thumb-[#aaaaaa]
    ">
      <Head>
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
      {/* <section id="skills">
        <Skills />
      </section> */}
    
      {/* Projects */}

      {/* Contact */}
    </div>

    
  )
}
