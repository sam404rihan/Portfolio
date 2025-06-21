"use client";

import * as React from "react";
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Projects() {
  // Fix hydration issues
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "A fully responsive e-commerce platform built with Next.js and Stripe integration.",
      technologies: ["Next.js", "React", "Stripe", "MongoDB"],
      image: "/projects/ecommerce-placeholder.png"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      description: "A drag-and-drop task management application with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      image: "/projects/task-placeholder.png"
    },
    {
      id: 3,
      title: "Company Dashboard UI",
      category: "design",
      description: "Modern dashboard UI design for company analytics and reporting.",
      technologies: ["Figma", "UI/UX", "Prototyping"],
      image: "/projects/dashboard-placeholder.png"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "design",
      description: "UI/UX design for a mobile banking application with focus on accessibility.",
      technologies: ["Adobe XD", "UI/UX", "Wireframing"],
      image: "/projects/banking-placeholder.png"
    },
    {
      id: 5,
      title: "Real Estate Listing Platform",
      category: "web",
      description: "A property listing platform with map integration and filtering options.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      image: "/projects/realestate-placeholder.png"
    },
    {
      id: 6,
      title: "Health Tracker App",
      category: "web",
      description: "A health and fitness tracking application with data visualization.",
      technologies: ["Next.js", "Chart.js", "PostgreSQL", "Auth0"],
      image: "/projects/health-placeholder.png"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial={mounted ? "hidden" : false}
      animate={mounted ? "show" : {}}
      className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12"
    >
      <motion.section 
        variants={itemVariants}
        className="max-w-6xl mx-auto py-6 sm:py-8 md:py-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-0">My Projects</h1>
          <Tabs defaultValue="all" className="w-full sm:w-auto">
            <TabsList className="grid grid-cols-3 w-full sm:w-auto">
              <TabsTrigger value="all" className="text-xs sm:text-sm">All</TabsTrigger>
              <TabsTrigger value="web" className="text-xs sm:text-sm">Web</TabsTrigger>
              <TabsTrigger value="design" className="text-xs sm:text-sm">Design</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-40 sm:h-48 md:h-56 bg-muted relative">
                    {/* Project image would go here */}
                  </div>
                  <CardHeader className="p-3 sm:p-4 md:p-5">
                    <CardTitle className="text-base sm:text-lg md:text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-5 pt-0 flex-grow">
                    <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 text-2xs sm:text-xs rounded-full bg-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="mr-2">View Details</Button>
                    {project.category === 'web' && (
                      <Button variant="secondary" size="sm">Live Demo</Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="web">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {projects.filter(p => p.category === 'web').map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-40 sm:h-48 md:h-56 bg-muted relative">
                    {/* Project image would go here */}
                  </div>
                  <CardHeader className="p-3 sm:p-4 md:p-5">
                    <CardTitle className="text-base sm:text-lg md:text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-5 pt-0 flex-grow">
                    <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 text-2xs sm:text-xs rounded-full bg-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="mr-2">View Details</Button>
                    {project.category === 'web' && (
                      <Button variant="secondary" size="sm">Live Demo</Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="design">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {projects.filter(p => p.category === 'design').map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-40 sm:h-48 md:h-56 bg-muted relative">
                    {/* Project image would go here */}
                  </div>
                  <CardHeader className="p-3 sm:p-4 md:p-5">
                    <CardTitle className="text-base sm:text-lg md:text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-5 pt-0 flex-grow">
                    <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 text-2xs sm:text-xs rounded-full bg-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="mr-2">View Details</Button>
                    {project.category === 'web' && (
                      <Button variant="secondary" size="sm">Live Demo</Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </motion.section>
    </motion.div>
  );
}
