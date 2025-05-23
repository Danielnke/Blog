
import { LeadCapturePost } from "@/components/blog-posts/LeadCapturePost";
import { AutomationPost } from "@/components/blog-posts/AutomationPost";
import { ChatbotsPost } from "@/components/blog-posts/ChatbotsPost";

export const blogPosts = {
  "ai-lead-capture": {
    id: 1,
    slug: "ai-lead-capture",
    title: "Stop Chasing Leads: How AI Can Automatically Fill Your Coaching Calendar with High-Value Clients",
    excerpt: "Learn how AI-powered lead capture can transform your coaching practice and attract ideal clients.",
    category: "Lead Generation",
    date: "April 10, 2025",
    readTime: 7,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4960cd32-c3f4-48e5-a84a-619c77830108/f8aa78ae8b4860ea8c2abb0a3cb8bbdf.png",
    Content: LeadCapturePost
  },
  "ai-automation": {
    id: 2,
    slug: "ai-automation",
    title: "Build Trust & Boost Retention: Leveraging Secure AI for Smarter Client Communication",
    excerpt: "Discover how AI-powered phone systems can transform your client communication and boost engagement.",
    category: "Communication",
    date: "April 8, 2025",
    readTime: 8,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4960cd32-c3f4-48e5-a84a-619c77830108/b3ca23f810ddd53d93a23d105aa3fd98.png",
    Content: AutomationPost
  },
  "smart-chatbots": {
    id: 3,
    slug: "smart-chatbots",
    title: "Drowning in Admin? 3 Ways AI Automation Gives Business Coaches Their Time Back",
    excerpt: "Discover how AI automation can free up your time and transform your coaching practice.",
    category: "Productivity",
    date: "April 7, 2025",
    readTime: 7,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4960cd32-c3f4-48e5-a84a-619c77830108/6a4d80b156e1a5c70ea056805a6af46d.png",
    Content: ChatbotsPost
  }
};
