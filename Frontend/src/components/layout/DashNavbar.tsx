"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  Package, 
  BookOpen, 
  TrendingUp,
  LogOut,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

const DashNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMinimized, setIsMinimized] = useState(false);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetPath = "/auth/login/dashboard";

    if (pathname === targetPath) {
      router.refresh();
    } else {
      router.push(targetPath);
    }
  };

  const navItems = [
    { 
      href: '/auth/login/dashboard/payroll', 
      icon: DollarSign, 
      label: 'Payroll',
      description: 'Manage employee payments'
    },
    { 
      href: '/auth/login/dashboard/inventory', 
      icon: Package, 
      label: 'Inventory',
      description: 'Track stock levels'
    },
    { 
      href: '/auth/login/dashboard/recipes', 
      icon: BookOpen, 
      label: 'Recipes',
      description: 'Bakery formulations'
    },
    { 
      href: '/auth/login/dashboard/sales', 
      icon: TrendingUp, 
      label: 'Sales',
      description: 'Revenue analytics'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <TooltipProvider>
      <motion.nav
        className={cn(
          "flex flex-col h-screen bg-gradient-to-br from-primary/30 via-background to-secondary/15 backdrop-blur-md border-r border-border/40 shadow-xl transition-all duration-300",
          isMinimized ? "w-20" : "w-72"
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo/Brand */}
        <motion.div
          className={cn(
            "flex items-center border-b border-border/40 transition-all duration-300",
            isMinimized ? "justify-center p-4" : "justify-between p-8"
          )}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {!isMinimized ? (
            <a href="/auth/login/dashboard" onClick={handleBrandClick} className="text-center flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                RIBEVAL CEVEN
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Bakeshop Dashboard</p>
            </a>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="/auth/login/dashboard" onClick={handleBrandClick} className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/70 rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">RC</span>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Ribeval Ceven Bakeshop</p>
              </TooltipContent>
            </Tooltip>
          )}
          
          {/* Minimize Toggle */}
          {!isMinimized && (
            <motion.div
              className="ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMinimize}
                className="p-2 h-8 w-8 rounded-lg bg-muted/30 border border-border/20 backdrop-blur-sm hover:bg-muted/50 transition-all duration-200"
              >
                <PanelLeftClose className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Expand Button (when minimized) */}
        {isMinimized && (
          <div className="flex justify-center p-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMinimize}
                  className="p-2 h-8 w-8 rounded-lg bg-muted/30 border border-border/20 backdrop-blur-sm hover:bg-muted/50 transition-all duration-200"
                >
                  <PanelLeftOpen className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Expand sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}

        {/* Theme Toggle */}
        {!isMinimized ? (
          <motion.div className="flex items-center justify-center p-4">
            <div className="p-2 rounded-lg bg-muted/30 border border-border/20 backdrop-blur-sm">
              <ThemeToggle />
            </div>
          </motion.div>
        ) : (
          <div className="flex justify-center p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="p-2 rounded-lg bg-muted/30 border border-border/20 backdrop-blur-sm">
                  <ThemeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Toggle theme</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}

        {/* Navigation Links */}
        <div className={cn(
          "flex flex-col flex-grow space-y-3 transition-all duration-300",
          isMinimized ? "px-2 py-4" : "px-6 py-8"
        )}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <motion.div
                key={item.href}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isMinimized ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-center p-3 rounded-xl transition-all duration-200",
                          "hover:bg-accent/50 hover:shadow-lg hover:backdrop-blur-sm",
                          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                          "border border-transparent hover:border-border/20",
                          isActive 
                            ? "bg-primary/10 text-primary border-primary/20 shadow-md" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between p-4 rounded-xl transition-all duration-200",
                      "hover:bg-accent/50 hover:shadow-lg hover:backdrop-blur-sm",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      "border border-transparent hover:border-border/20",
                      isActive 
                        ? "bg-primary/10 text-primary border-primary/20 shadow-md" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "p-2 rounded-lg transition-colors duration-200",
                        isActive 
                          ? "bg-primary/30 text-primary" 
                          : "bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary"
                      )}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <AnimatePresence>
                        <motion.div
                          className="flex flex-col"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="font-medium text-sm">{item.label}</span>
                          <span className="text-xs text-muted-foreground/90">{item.description}</span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-all duration-200",
                      isActive 
                        ? "text-primary transform translate-x-1" 
                        : "text-muted-foreground/50 group-hover:text-primary group-hover:transform group-hover:translate-x-1"
                    )} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* User Section */}
        <motion.div 
          className={cn(
            "border-t border-border/40 mt-auto transition-all duration-300",
            isMinimized ? "p-2" : "p-6"
          )}
          variants={itemVariants}
        >
          {!isMinimized ? (
            <>
              <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-4 mb-4 border border-border/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">RC</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Ribeval Admin</p>
                    <p className="text-xs text-muted-foreground">Administrator</p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 hover:border-destructive/20 border border-transparent rounded-xl p-4 h-auto transition-all duration-200"
                  onClick={handleLogout}
                >
                  <div className="p-2 rounded-lg bg-muted/50 hover:bg-destructive/10 transition-colors duration-200">
                    <LogOut className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-sm">Logout</span>
                    <span className="text-xs text-muted-foreground/70">Sign out safely</span>
                  </div>
                </Button>
              </motion.div>
            </>
          ) : (
            <div className="space-y-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </motion.div>
      </motion.nav>
    </TooltipProvider>
  );
};

export default DashNavbar;