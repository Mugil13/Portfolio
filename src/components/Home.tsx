'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
      >
        <source src="6543340-uhd_4096_1974_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="relative h-screen flex flex-col justify-center items-center pt-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
          
          {/* Profile pic */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
          <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-white/20 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.3)] hover:border-white/40">
          <Image
            src="/profile4.jpg"
            alt="Mugil"
            width={1200}
            height={1200}
            className="object-cover w-full h-full"
            priority
          />
          </div>
          </motion.div>

          {/* Type shi */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hey there, I'm <span className="cool-text-cyan">Mugil</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-300 mb-4">
              • <span className="cool-text-blue">AI/ML/DL</span>{' '}
              <span className="cool-text-green">Researcher</span> •{' '}
              <span className="cool-text-purple">Full Stack</span>{' '}
              <span className="text-white">Developer</span>
            </p>

            <p className="text-md md:text-lg text-gray-400 leading-relaxed mb-4 max-w-xl">
              Final-year <span className="cool-text-blue">Computer Science</span> undergrad at <span className="cool-text-purple">SSNCE</span><br />
              Dedicated to building <span className="cool-text-blue">scalable systems</span> that solve <span className="cool-text-purple">real-world problems</span> with <span className="cool-text-green">precision</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <a href="#contact" className="cool-button px-6 py-2 rounded-full font-semibold">
              Get in Touch
              </a>

              <a href="#projects" className="cool-button-outline px-6 py-2 rounded-full font-semibold">
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1srs74YqPmWMUQOMj-wXVvt4aWBDH0UHk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cool-button-outline px-6 py-2 rounded-full font-semibold transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                View Resume
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-3 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                  Opens in Google Drive
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <a href="#about" className="scroll-smooth">
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </a>
      </section>
    </>
  );
}
