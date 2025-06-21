"use client";

import * as React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Home() {
  // Fix hydration issues and ensure animations only run after hydration
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
    return (
    <motion.div 
      variants={containerVariants}
      initial={mounted ? "hidden" : false}
      animate={mounted ? "show" : {}}
      className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12"
    >
      {/* Hero Section */}      
      <motion.section 
        variants={itemVariants}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12 py-6 sm:py-8 md:py-12"
      >
        <div className="w-full md:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 md:mb-6">
              Samar Rihan
            </h1>
          </motion.div>          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4"
          >
            Creative Developer & Designer | Building beautiful, functional, and accessible digital experiences.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6"
          >
            Connect with me on social media or drop me a message.
          </motion.p>          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2"
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors"
            >
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a 
              href="mailto:contact@example.com" 
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted/50 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </div>        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block md:w-2/5 aspect-square relative"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                transition: { 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }
              }}
            >              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40">
                <AvatarImage src="/avatar-placeholder.png" alt="Samar Rihan Profile" />
                <AvatarFallback className="text-2xl sm:text-3xl lg:text-5xl">SR</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>      <Separator className="my-8 md:my-12" />      {/* Projects Section */}
      <motion.section
        variants={itemVariants} 
        className="max-w-6xl mx-auto py-6 sm:py-8 md:py-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {[1, 2, 3].map((project) => (
            <motion.div 
              key={project}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative"
            >              
              <Card className="h-full">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <div className="h-32 sm:h-36 md:h-48 w-full bg-muted rounded-md mb-2 sm:mb-3 md:mb-4" />
                  <CardTitle className="text-base sm:text-lg md:text-xl">Project {project}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Web Application</CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    A modern web application built with React and Next.js that showcases interactive UI components.
                  </p>
                </CardContent>
                <CardFooter className="p-3 sm:p-4 md:p-6 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="text-xs">Demo</Button>
                  <Button variant="secondary" size="sm" className="text-xs">Details</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>        
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </motion.section>

      <Separator className="my-6 sm:my-8 md:my-12" />      {/* Skills Section */}
      <motion.section
        variants={itemVariants} 
        className="max-w-6xl mx-auto py-6 sm:py-8 md:py-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">My Skills & Expertise</h2>        
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="mb-3 sm:mb-4 md:mb-6 w-full grid grid-cols-3">
            <TabsTrigger value="frontend" className="text-xs sm:text-sm">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="text-xs sm:text-sm">Backend</TabsTrigger>
            <TabsTrigger value="design" className="text-xs sm:text-sm">Design</TabsTrigger>
          </TabsList>          
          <TabsContent value="frontend" className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'CSS/SASS', 'HTML5'].map((skill) => (
                <HoverCard key={skill}>
                  <HoverCardTrigger asChild>
                    <Card className="cursor-pointer">
                      <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                        <span className="text-xs sm:text-sm md:text-base">{skill}</span>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 sm:w-72 md:w-80">
                    <div className="flex justify-between space-x-2 sm:space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-semibold">{skill}</h4>
                        <p className="text-xs">
                          {skill === 'React' && 'Component-based UI library for building user interfaces'}
                          {skill === 'Next.js' && 'React framework with hybrid static & server rendering'}
                          {skill === 'TypeScript' && 'Strongly typed programming language built on JavaScript'}
                          {skill === 'Tailwind CSS' && 'Utility-first CSS framework for rapid UI development'}
                          {skill === 'Framer Motion' && 'Production-ready motion library for React'}
                          {skill === 'Redux' && 'State management library for JavaScript applications'}
                          {skill === 'CSS/SASS' && 'Styling languages for creating beautiful user interfaces'}
                          {skill === 'HTML5' && 'Latest version of the HTML standard for web development'}
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </TabsContent>          
          <TabsContent value="backend">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'AWS', 'Firebase'].map((skill) => (
                <Card key={skill} className="cursor-pointer">
                  <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                    <span className="text-xs sm:text-sm md:text-base">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="design">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Responsive Design', 'Wireframing', 'Design Systems', 'Accessibility'].map((skill) => (
                <Card key={skill} className="cursor-pointer">
                  <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                    <span className="text-xs sm:text-sm md:text-base">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>        </Tabs>
      </motion.section>      {/* Call to Action */}
      <motion.section
        variants={itemVariants}
        className="max-w-6xl mx-auto py-8 md:py-12 my-8 md:my-12 bg-primary/5 rounded-lg"
      >
        <div className="text-center p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">Ready to Work Together?</h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto">
            I'm currently available for freelance projects, full-time positions, and collaborations.
          </p>
          <Button size="sm" className="text-xs sm:text-sm" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
}