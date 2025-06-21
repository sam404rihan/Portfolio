"use client";

import * as React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

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

export default function Contact() {
  // Fix hydration issues
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={mounted ? "hidden" : false}
      animate={mounted ? "show" : {}}
      className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12"
    >      <motion.section 
        variants={itemVariants}
        className="max-w-3xl mx-auto py-6 sm:py-8 md:py-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Get In Touch</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 md:mb-8">
          Have a project in mind or want to collaborate with Samar Rihan? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        
        <Card>
          <CardContent className="p-3 sm:p-4 md:p-6">
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6 sm:py-8 md:py-10"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">Message Sent!</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Thank you for reaching out. I'll respond to your message soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm sm:text-base font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm sm:text-base font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm sm:text-base font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm sm:text-base font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    sm:rows={6}
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
