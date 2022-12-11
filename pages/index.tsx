import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="relative bg-[#eeeeee] text-gray-800 h-screen overflow-x-hidden overflow-y-scroll z-0">
      <Head>
        <title>Exhibition | seancfong</title>
      </Head>
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
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
