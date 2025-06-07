"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Package, 
  BookOpen, 
  TrendingUp,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <motion.nav
      className="flex flex-col h-screen w-72 bg-background/80 backdrop-blur-md border-r border-border/40 shadow-xl transition-all duration-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Logo/Brand */}
      <motion.div
        className="flex items-center justify-center p-8 border-b border-border/40"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a href="/auth/login/dashboard" onClick={handleBrandClick} className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            RIBEVAL CEVEN
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Bakeshop Dashboard</p>
        </a>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex flex-col flex-grow px-6 py-8 space-y-3">
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
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{item.label}</span>
                    <span className="text-xs text-muted-foreground/70">{item.description}</span>
                  </div>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 transition-all duration-200",
                  isActive 
                    ? "text-primary transform translate-x-1" 
                    : "text-muted-foreground/50 group-hover:text-primary group-hover:transform group-hover:translate-x-1"
                )} />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* User Section */}
      <motion.div 
        className="p-6 border-t border-border/40 mt-auto"
        variants={itemVariants}
      >
        <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-4 mb-4 border border-border/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">RC</span>
            </div>
            <div>
              <p className="font-medium text-sm">Ribeval Ceven</p>
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
            <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-destructive/10 transition-colors duration-200">
              <LogOut className="h-4 w-4" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-medium text-sm">Logout</span>
              <span className="text-xs text-muted-foreground/70">Sign out of account</span>
            </div>
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default DashNavbar;