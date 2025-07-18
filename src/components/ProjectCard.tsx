'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  status?: 'in-progress';
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
  status,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-glass rounded-2xl overflow-hidden shadow-lg border border-white/10 flex flex-col h-full min-h-[420px]"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col h-full"
      >
        {/* Image Section */}
        <div className="w-full h-48 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/demo/blur.png"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-semibold cool-text-blue">{title}</h3>
            {status === 'in-progress' && (
              <span className="text-xs inline-block mt-1 bg-yellow-600 text-white px-2 py-0.5 rounded-full">
                In Progress
              </span>
            )}
          </div>

          <p className="text-gray-300 text-sm flex-1">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* GitHub Icon */}
          <div className="mt-4 flex justify-center">
            <Github
              size={28}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
