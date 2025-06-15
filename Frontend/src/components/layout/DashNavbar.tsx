"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DollarSign, Package, BookOpen, TrendingUp, LogOut, Menu, X, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const DashboardNavbar = () => {
  const pathname = usePathname()
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/auth/login/dashboard/payroll", icon: DollarSign, label: "Payroll" },
    { href: "/auth/login/dashboard/inventory", icon: Package, label: "Inventory" },
    { href: "/auth/login/dashboard/recipes", icon: BookOpen, label: "Recipes" },
    { href: "/auth/login/dashboard/sales", icon: TrendingUp, label: "Sales" },
  ]

  const handleLogout = () => {
    console.log("Logout clicked")
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={cn(
          "hidden md:flex flex-col h-screen bg-background border-r border-border shadow-sm transition-all duration-300",
          isMinimized ? "w-16" : "w-64",
        )}
      >
        {/* Logo/Brand */}
        <div
          className={cn(
            "flex items-center border-b border-border transition-all duration-300",
            isMinimized ? "justify-center p-4" : "justify-between p-6",
          )}
        >
          <Link href="/auth/login/dashboard">
            {!isMinimized ? (
              <div className="text-center flex-1">
                <h1 className="text-xl font-bold text-primary">RIBEVAL CEVEN</h1>
                <p className="text-sm text-muted-foreground">Bakeshop Dashboard</p>
              </div>
            ) : (
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RC</span>
              </div>
            )}
          </Link>
          

          {!isMinimized && (
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(true)} className="p-2">
              <PanelLeftClose className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Expand Button (when minimized) */}
        {isMinimized && (
          <div className="flex justify-center p-4">
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(false)} className="p-2">
              <PanelLeftOpen className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Navigation Links */}
        <div
          className={cn(
            "flex flex-col flex-grow space-y-2 transition-all duration-300",
            isMinimized ? "px-2 py-4" : "px-4 py-6",
          )}
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg transition-colors duration-200",
                  "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring",
                  isMinimized ? "justify-center p-3" : "space-x-3 p-3",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {!isMinimized && <span className="font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </div>

        {/* User Section */}
        <div className={cn("border-t border-border mt-auto", isMinimized ? "p-2" : "p-4")}>
          {!isMinimized ? (
            <Link href="/auth/login/dashboard">
              <div className="bg-muted rounded-lg p-3 mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">RC</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Ribeval Admin</p>
                    <p className="text-xs text-muted-foreground">Administrator</p>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </Link>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="w-full p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        {/* Mobile Brand/Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/auth/login/dashboard" className="font-bold text-lg text-primary">RIBEVAL CEVEN</Link>
        </div>

        {/* Mobile Navigation Icons and Hamburger */}
        <div className="flex items-center space-x-2">

          {/* Hamburger Menu Button */}
          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
          <div className="p-4 space-y-2">
            {/* All navigation items */}
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200",
                    "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring",
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}

            {/* User section */}
            <div className="border-t border-border pt-4 mt-4">
              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                onClick={() => {
                  handleLogout()
                  setIsMobileMenuOpen(false)
                }}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile content padding */}
      <div className="md:hidden h-16" />
    </>
  )
}

export default DashboardNavbar
