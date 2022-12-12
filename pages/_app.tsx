import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState" 
        transition={{ 
          duration: 2,
          ease: [.67,.09,.5,.92]
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "circle(50%)"
          },
          animateState: {
            opacity: [0, 0.9, 1],
            clipPath: "circle(100%)"
          },
          exitState: {
            clipPath: "circle(100%)"
          }
        }}
        className="base-page-size">
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  
  
  )
}
