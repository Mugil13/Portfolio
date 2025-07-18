'use client';

import ProjectCard from './ProjectCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Bankbee',
    description:
      'A finance management dashboard with modern UI/UX, built using TypeScript, React, and TailwindCSS for professional-grade personal finance insights.',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Figma'],
    image: '/demo/bankbee.jpg',
    link: 'https://github.com/Mugil13/Bankbee',
    status: 'in-progress',
  },
  {
    title: 'Credit Card Fraud Detection API',
    description:
      'End-to-end ML pipeline for fraud detection with PCA, SMOTE, Flask API, Docker containers, and real-time monitoring using Prometheus + Grafana.',
    tech: ['Flask', 'Docker', 'Prometheus', 'ML', 'Grafana'],
    image: '/demo/credit-card-fraud.jpg',
    link: 'https://github.com/Mugil13/Credit-Card-Fraud-Detection-API',
  },
  {
    title: 'InternTrack',
    description:
      'Full-stack internship tracking app for institutions, including role-based login, OCR for document parsing, and Google Sheets + Drive integration.',
    tech: ['React', 'Firebase', 'OCR', 'MongoDB', 'Node.js'],
    image: '/demo/interntrack.jpg',
    link: 'https://github.com/Mugil13/InternTrack',
  },
  {
    title: 'IMDB Sentiment Analysis',
    description:
      'Sentiment classifier using TF-IDF, 10+ ML models, ensemble voting, and hyperparameter tuning with detailed evaluation on 50K IMDB reviews, deployed in GCP.',
    tech: ['Python', 'ML', 'GCP', 'Ensemble Models'],
    image: '/demo/imdb.png',
    link: 'https://github.com/Mugil13/IMDB-Sentiment-Analysis',
  },
  {
    title: 'LEAR Framework on MNIST',
    description:
      'Implements counterfactual explanations using LEAR framework with encoder-decoder-discriminator architecture on handwritten digit classification.',
    tech: ['PyTorch', 'XAI', '3D CNNs', 'GANs'],
    image: '/demo/counterfactual.png',
    link: 'https://github.com/Mugil13/LEAR-MNIST',
  },
  {
    title: 'Defend the Nexus Game',
    description:
      'Tower defense game using A* for user-AI and Simulated Annealing for AI-AI, with grid rendering, turret tracking, and wave adaptation.',
    tech: ['Python', 'Pygame', 'Raylib', 'Game AI'],
    image: '/demo/tower-defense.png',
    link: 'https://github.com/Mugil13/Defend-the-Nexus',
  }
];

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.02 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      id="projects"
      className="relative min-h-screen px-6 py-20 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1.0, ease: 'easeOut' }}
    >
      <div className="night-bg">
        {[...Array(15)].map((_, i) => (
          <div key={`meteor-${i}`} className="meteor" />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex-1 text-left mb-12">
          <h3 className="text-3xl font-extrabold mb-6" style={{ color: '#c770ff' }}>
            FEATURED PROJECTS
          </h3>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                image={project.image}
                status={project.status as 'in-progress' | undefined}
              />

            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Mugil13"
            target="_blank"
            rel="noopener noreferrer"
            className="cool-button-outline px-6 py-3 rounded-full text-lg font-semibold inline-flex items-center gap-1 group overflow-hidden"
          >
            View More on GitHub
            <span className="transition-all duration-700 ease-out group-hover:tracking-[4rem] group-hover:text-transparent">
              →
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
