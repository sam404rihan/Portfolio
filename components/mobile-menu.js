"use client";

import * as React from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when route changes
  React.useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener('hashchange', handleRouteChange);
    
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div className="sm:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        className="relative z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center space-y-6">
              <motion.div variants={itemVariants}>
                <Link href="/" className="text-xl font-medium px-4 py-2" onClick={toggleMenu}>
                  Home
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link href="/projects" className="text-xl font-medium px-4 py-2" onClick={toggleMenu}>
                  Projects
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link href="/about" className="text-xl font-medium px-4 py-2" onClick={toggleMenu}>
                  About
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link href="/contact" className="text-xl font-medium px-4 py-2" onClick={toggleMenu}>
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
