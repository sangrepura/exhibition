import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600'],
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
     <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
        <div 
          key={router.route}        
          className="base-page-size">
          <Component {...pageProps} />
        </div>
    </>
      

  
  )
}
