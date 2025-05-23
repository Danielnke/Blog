
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-border/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">TheraEase</span>
            </Link>
            <p className="mt-4 text-sm text-foreground/60">
              Empowering coaches and consultants with AI automation solutions for seamless business growth and client engagement.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/60 hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/60 hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://app.theraease.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Main Site
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="https://app.theraease.org/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://app.theraease.org/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} TheraEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
