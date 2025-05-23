
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="gradient-text">TheraEase Blog</span>
        </h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Your trusted resource for insights on AI automation, business growth, and client engagement strategies for coaches and consultants.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-foreground/60 mb-6">
            We're dedicated to helping coaches and consultants harness the power of AI automation to transform their practices. Through our blog, we share valuable insights, practical tips, and industry best practices to help you grow your business and enhance client engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
          <ul className="space-y-3 text-foreground/60">
            <li>• AI-Powered Lead Capture Strategies</li>
            <li>• Smart Client Engagement Solutions</li>
            <li>• Automated Scheduling Systems</li>
            <li>• Business Growth Tactics</li>
            <li>• Industry Trends and Insights</li>
          </ul>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Practice?
        </h2>
        <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
          Discover how TheraEase can help you automate your coaching business and enhance client engagement.
        </p>
        <Button asChild>
          <a 
            href="https://app.theraease.org/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Demo
          </a>
        </Button>
      </motion.section>
    </div>
  );
}

export default About;
