"use client";

import * as React from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from './mode-toggle';
import { MobileMenu } from './mobile-menu';

export default function Header() {
  // Add hydration safety with useEffect
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (    <motion.header 
      initial={mounted ? { opacity: 0, y: -20 } : false}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex items-center"
      >        <Link href="/" className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-1 sm:gap-2">
          <span className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs sm:text-sm md:text-base">SR</span>
          <span>Samar Rihan</span>
        </Link>
      </motion.div>
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="space-x-1 md:space-x-2">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All Projects
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          View all my web development and design projects
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/projects/web"
                      >
                        <div className="text-sm font-medium leading-none">Web Apps</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Interactive web applications and sites
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/projects/design"
                      >
                        <div className="text-sm font-medium leading-none">UI Designs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          User interface and experience designs
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <MobileMenu />
        <ModeToggle />
      </div>
    </motion.header>
  );
}