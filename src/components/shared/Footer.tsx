import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Brand Name</h3>
            <p className="text-sm">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2 text-sm">
              <Link
                href="/"
                className="block hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Values
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Innovation</li>
              <li>Quality</li>
              <li>Integrity</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Brand Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
