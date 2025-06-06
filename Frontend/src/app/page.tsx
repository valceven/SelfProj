"use client"

import { motion } from "framer-motion"


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto max-w-6xl relative">
          <motion.div className="text-center space-y-8" initial="initial" animate="animate" variants={staggerContainer}>

            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text font-playfair text-transparent leading-tight"
              variants={fadeInUp}
            >
              RIBEVAL CEVEN
              <br />
              <span className="text-4xl md:text-6xl">BAKESHOP</span>
            </motion.h1>

          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home