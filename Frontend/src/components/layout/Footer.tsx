"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">© 2016-2024 Ribeval Ceven Bakeshop. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer