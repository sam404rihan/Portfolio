"use client";

import * as React from "react";
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function About() {
  // Fix hydration issues
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  // Experience data
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead frontend development for enterprise web applications. Implemented state-of-the-art UI components and optimization strategies."
    },
    {
      id: 2,
      role: "UI/UX Designer & Developer",
      company: "Creative Solutions",
      period: "2019 - 2022",
      description: "Designed and developed responsive web interfaces for clients across various industries. Improved conversion rates by an average of 35%."
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Digital Agency",
      period: "2017 - 2019",
      description: "Developed websites and web applications using modern technologies. Collaborated with designers to implement pixel-perfect UIs."
    }
  ];
  
  const education = [
    {
      id: 1,
      degree: "M.S. in Computer Science",
      institution: "Tech University",
      period: "2016 - 2017",
      description: "Specialized in Human-Computer Interaction and Web Technologies."
    },
    {
      id: 2,
      degree: "B.S. in Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      description: "Focused on Software Development and UI Design."
    }
  ];
  
  return (
    <motion.div
      variants={containerVariants}
      initial={mounted ? "hidden" : false}
      animate={mounted ? "show" : {}}
      className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12"
    >
      {/* Bio Section */}
      <motion.section 
        variants={itemVariants}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 md:gap-12 py-6 sm:py-8 md:py-12"
      >
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:sticky lg:top-24">          <Avatar className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <AvatarImage src="/avatar-placeholder.png" alt="Samar Rihan Profile" />
            <AvatarFallback className="text-3xl md:text-4xl lg:text-5xl">SR</AvatarFallback>
          </Avatar>
          <div className="mt-4 sm:mt-6 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Samar Rihan</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Creative Developer & Designer</p>
          </div>
        </div>
        
        <div className="w-full lg:w-3/4">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">About Me</h2>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                I'm a passionate frontend developer and designer with over 5 years of experience 
                creating beautiful and functional digital experiences.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                My journey in web development began when I built my first website at 16. Since then, 
                I've worked with startups, agencies, and enterprises to create user-centered 
                experiences that drive engagement and conversion.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                I specialize in building responsive and accessible web applications using the latest 
                technologies and best practices. My goal is to deliver high-quality software that not 
                only meets the needs of users but also provides a delightful and engaging experience.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16" />

      {/* Experience Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React & Next.js",
            "JavaScript & TypeScript",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "UI/UX Design",
            "Responsive Design",
            "Figma & Adobe XD",
            "REST APIs & GraphQL",
            "Node.js & Express",
            "Git & GitHub",
            "Performance Optimization",
            "Accessibility (a11y)"
          ].map((skill, index) => (
            <Card key={index} className="flex items-center justify-center p-4 h-20 text-center">
              <span>{skill}</span>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Personal Interests */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Personal Interests</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              When I'm not coding or designing, you can find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Exploring hiking trails and photography</li>
              <li>Reading books on design, psychology, and science fiction</li>
              <li>Playing guitar and experimenting with music production</li>
              <li>Contributing to open-source projects</li>
              <li>Attending tech meetups and conferences</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
