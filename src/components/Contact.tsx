'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 flex flex-col items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] opacity-75 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold cool-text-purple mb-4"
        >
          GET IN TOUCH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-300 max-w-2xl ml-0"
        >
          Open to internships, collaborations, projects or just talking shop about ML and Fintech topics
        </motion.p>

        {/* Spline Globe */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-14">


          <motion.div
            className="w-full md:w-1/2 h-[400px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
            className="pointer-events-auto select-none"
            onWheel={(e) => e.preventDefault()}
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '365px',
              overflow: 'hidden',
            }}
          >
            <spline-viewer
              url="https://prod.spline.design/pztO0v9CvhezPUyk/scene.splinecode"
              style={{
                width: '115%',
                height: '115%',
                background: 'transparent',
                pointerEvents: 'auto',
              }}
            />
          </div>
          </motion.div>

          {/* Contact form - maintain responses from formspree */}
          <motion.form
            action="https://formspree.io/f/mwpbjbla"
            method="POST"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-xl space-y-5 bg-glass p-8 rounded-2xl backdrop-blur-md border border-white/10"
            onSubmit={() => setIsSending(true)}
          >
            <p className="text-lg font-semibold mb-4">Send a message to connect!</p>

            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-4 ring-neon-cyan transition-all duration-200"
              required
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-4 ring-neon-cyan transition-all duration-200"
              required
            />

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-4 ring-neon-cyan resize-y transition-all duration-200"
              required
            />

            <button
              type="submit"
              disabled={isSending}
              className={`cool-button w-full py-3 rounded-md font-semibold text-lg transition-all duration-200 ${
                isSending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-lg">
          <motion.a
            href="mailto:mugilkrishna.d.u@gmail.com"
            className="flex items-center gap-2 text-white hover:text-neon-cyan transition"
            whileHover={{ scale: 1.1 }}
          >
            <Mail className="w-5 h-5" /> mugilkrishna.d.u@gmail.com
          </motion.a>
          <motion.a
            href="https://github.com/Mugil13"
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-neon-cyan transition"
            whileHover={{ scale: 1.1 }}
          >
            <Github className="w-5 h-5" /> GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mugilkrishna-du/"
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-neon-cyan transition"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mugil._.13/"
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-neon-cyan transition"
            whileHover={{ scale: 1.1 }}
          >
            <Instagram className="w-5 h-5" /> Instagram
          </motion.a>
          <motion.div
            className="flex items-center gap-2 text-white hover:text-neon-cyan transition"
            whileHover={{ scale: 1.1 }}
          >
            <MapPin className="w-5 h-5" /> Chennai
          </motion.div>
        </div>

        {/* Footer Divider */}
        <div className="mt-16">
          <motion.div
            className="w-[200px] h-[2px] mx-auto bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ duration: 1 }}
          />
          <p className="mt-4 text-sm text-gray-400">Mugil © 2025</p>
        </div>
      </div>

      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js" async></script>
    </section>
  );
}