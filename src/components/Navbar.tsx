'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

{/* Contains navbar items, update certifications later, once obtained */}
const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-glass backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
        href="#" 
        className="flex items-center text-2xl font-extrabold text-white tracking-tight gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        >
        <img src="/m-logo.png" alt="Logo" className="w-8 h-8 object-contain" />
        Mugil's Portfolio
        </motion.a>

        {/* Desktop nav */}
        <motion.div 
          className="hidden md:flex gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map(({ label, href }, index) => (
            <motion.a
              key={href}
              href={href}
              className="text-gray-200 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cool-text-purple to-cool-text-blue transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-glass backdrop-blur-md border-t border-white/10"
        >
          {navItems.map(({ label, href }, index) => (
            <motion.a
              key={href}
              href={href}
              className="text-gray-200 hover:text-cyan-400 transition-all duration-300 font-medium py-2"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}