"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-primary bg-clip-text text-transparent"
            >
              Ribeval
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-brand-teal-500 transition-colors duration-200 font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal-500 transition-all duration-200 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6  }}
          >
            <ThemeToggle />
            <Link href="/auth/login">
              <Button>
                Login
              </Button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 hover:text-primary-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/40">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/pricing", label: "Pricing" },
                { href: "/auth/login", label: "Login" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar