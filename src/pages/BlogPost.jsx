
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const Content = post.Content;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mb-8">
        <span className="text-sm text-blue-600">{post.category}</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-foreground/60">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>

      <img  
        className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-lg"
        alt={post.title}
        src={post.image} />

      <div className="prose prose-blue max-w-none bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <Content />
      </div>

      <div className="mt-12 p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Practice?</h2>
        <p className="text-foreground/60 mb-6">
          Experience how TheraEase can help you automate your coaching business and enhance client engagement.
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
      </div>
    </motion.article>
  );
}

export default BlogPost;
