
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

function Home() {
  const featuredPosts = Object.values(blogPosts);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Insights for <span className="gradient-text">Coaches & Consultants</span>
        </h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Discover how AI automation can transform your coaching practice and enhance client engagement.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/blog/${post.slug}`}>
              <img  
                className="w-full h-48 object-cover"
                alt={post.title}
                src={post.image} />
              <div className="p-6">
                <span className="text-sm text-blue-600">{post.category}</span>
                <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
                <p className="text-foreground/60 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-foreground/60">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>
    </div>
  );
}

export default Home;
