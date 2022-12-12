import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);

  useEffect(() => {
    if (heroInView) {
      console.log('hero in view'); 
    } else {
      console.log('hero not in view');
    }
  }, [heroInView]);

  return (
    <div className="relative bg-[#eeeeee] text-gray-800 h-screen overflow-x-hidden overflow-y-scroll z-0">
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

      {/* Experience */}

      {/* Skills */}
    
      {/* Projects */}

      {/* Contact */}
    </div>

    
  )
}
