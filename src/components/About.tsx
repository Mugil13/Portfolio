import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

// Simple TechStack component to replace the imported one
function TechStack() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Python', color: '#3776AB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Node.js', color: '#339933' },
    { name: 'TensorFlow', color: '#FF6F00' },
    { name: 'PyTorch', color: '#EE4C2C' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Docker', color: '#2496ED' },
  ];

  return (
    <div className="flex justify-center items-center h-64 perspective-1000">
      <div 
        className="relative w-48 h-48"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute w-16 h-16 flex items-center justify-center text-xs font-bold rounded-lg shadow-lg"
            style={{
              backgroundColor: tech.color,
              color: tech.color === '#F7DF1E' ? '#000' : '#fff',
              transform: `rotateY(${index * 45}deg) translateZ(100px)`,
            }}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const experienceData = [
    {
      title: 'IIT Roorkee',
      org: 'Research Intern',
      date: 'Jun 2025 – Present',
      desc: 'Exploring deep learning models for Alzheimer\'s diagnosis using PyTorch, U-Net, VoxCNN, and ResNet18. Developed a unique PyTorch-based approach within 6 weeks, integrating GANs and LRP-Z for counterfactual explainability using FSL tools',
      logo: '/iit-roorkee.png',
    },
    {
      title: 'IEEE EMBS SSN',
      org: 'Web Development Head',
      date: 'Jun 2025 – Present',
      desc: 'Currently leading development of the society\'s website planned to deploy using TypeScript, Tailwind CSS, and Firebase. Aiming to streamline event hosting, smooth UI experience and improve participant engagement',
      logo: '/ieee-embs.png',
    },
    {
      title: 'AI Student Chapter SSN',
      org: 'PR/Sponsorship Core',
      date: 'Mar 2025 – Present',
      desc: 'Involved in outreach across Gmail campaigns and Instagram to maximize event reach and visibility. Supported promotional efforts and maintained public engagement',
      logo: '/ai-student-chapter.jpg',
    },
    {
      title: 'SSN Math Club',
      org: 'Event Head - Exlog',
      date: 'Jan 2025 – Feb 2025',
      desc: 'Planned and led the "Rapid Fire" event with more than 70 participants. Handled everything from quiz preparation to anchoring the event, receiving strong feedback for smooth coordination',
      logo: '/math-club.png',
    },
    {
      title: 'ACE, SSN',
      org: 'Marketing & Logistics Core',
      date: 'Aug 2024 – Sep 2024',
      desc: 'Assisted in budget planning, logistics, and student-focused marketing strategies for Invente \'24. Helped improve engagement and ensured smooth material procurement',
      logo: '/ace.png',
    },
    {
      title: 'SSN MUN Society',
      org: 'General Administrator - Logistics',
      date: 'Jun 2024 – Aug 2024',
      desc: 'Managed merchandise and delegate kits for the annual MUN. Contributed to the team by effective planning and vendor coordination',
      logo: '/munsoc.png',
    }
  ];

  return (
    <div
      className={`relative min-h-screen py-20 px-6 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#ededed'
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center gap-10">
          <div className="flex-1 text-left">
            <h3 className="text-3xl font-extrabold mb-6" style={{ color: '#c770ff' }}>
              ABOUT ME
            </h3>
            <div className="text-gray-300 text-lg md:text-xl space-y-4 max-w-4xl leading-relaxed">
              <p>
                I'm Mugil — a final-year CSE undergraduate at SSN College of Engineering. I'm passionate about building and experimenting with <span style={{ color: '#4fc3f7' }}>Machine Learning</span> and <span style={{ color: '#00ffff' }}>Deep Learning</span> models to tackle real-world problems. I also enjoy developing <span style={{ color: '#ffb74d' }}>full-stack web applications</span> using the latest <span style={{ color: '#bb86fc' }}>modern frameworks</span>.
              </p>
              <p>
                I'm driven by curiosity, growth, and collaboration — always eager to learn, evolve, and connect with people who share the same energy.
              </p>
            </div>
          </div>

          {/* 3D Model placeholder for desktop */}
          {!isMobile && (
            <div className="flex-1 max-w-md h-96 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 ml-40 relative flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 animate-pulse"></div>
                <p className="text-gray-400 text-sm">3D Model Placeholder</p>
              </div>
            </div>
          )}
        </div>

        {/* Experience & Activities */}
        <div>
          <h3 className="text-3xl font-semibold mb-8" style={{ color: '#00ffe0' }}>
            Experience & Activities
          </h3>

          <div className="relative overflow-x-auto pb-6">
            <div className="flex gap-6 min-w-full px-4 md:px-10 scroll-smooth">
              {experienceData.map((item, i) => (
                <div
                  key={i}
                  className="bg-black/30 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-80 min-w-[300px] max-w-sm flex-shrink-0 transform"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.org.charAt(0)}</span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-green-400 text-sm">{item.org}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                  <p className="mt-3 text-gray-300 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-3xl font-semibold mb-8" style={{ color: '#00aae0' }}>Publications</h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <a
              href="https://aclanthology.org/2025.dravidianlangtech-1.65.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 border border-white/10 rounded-xl p-6 text-left shadow-md hover:bg-pink-500/20 hover:shadow-lg transition duration-300 block h-full min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Detecting AI-Written Reviews for Consumer Trust</h4>
                <p className="text-blue-400 text-sm mb-2">ACL · May 1, 2025</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                   Published in DravidianLangTech@NAACL 2025, this paper addresses the rising challenge of AI-generated fake reviews in regional languages. Built a multilingual classification framework using mBERT to distinguish synthetic vs human-authored reviews in Tamil and Malayalam. Achieved <span className="font-bold text-green-400">F1-Score of 0.90</span> (10th) in Tamil and <span className="font-bold text-green-400">0.68</span> (28th) in Malayalam. Our work helps in content moderation and better conditions in online marketplaces
                </p>
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1OEjLFGhmXnQvvbomXkysJTsxfjXKVKQj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 border border-white/10 rounded-xl p-6 text-left shadow-md hover:bg-pink-500/20 hover:shadow-lg transition duration-300 block h-full min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Multi-Label Emotion Classification Using Fine-Tuned Roberta-Large Transformer</h4>
                <p className="text-blue-400 text-sm mb-2">SemEval-2025 · Accepted</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Part of SemEval-2025 Task 11, this paper explores fine-tuned RoBERTa-large models for nuanced emotion detection and regression. Focused on capturing multiple overlapping emotional signals from social media data. Our system ranked <span className="font-bold text-green-400">31st</span> in Macro F1 (<span className="font-bold text-green-400">0.75</span>) and <span className="font-bold text-green-400">17th</span> in Pearson (<span className="font-bold text-green-400">0.75</span>)
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Tech Helix */}
        <div id="tech">
          <h3 className="text-3xl font-extrabold mb-6" style={{ color: '#c770ff' }}>
            TECH STACK HELIX
          </h3>
          <TechStack />
        </div>

        <div className="text-sm italic text-blue-400 font-large flex justify-center items-center gap-2">
          <Sparkles className="h-4 w-4 animate-pulse text-purple-400" />
          "Building one app at a time"
          <Sparkles className="h-4 w-4 animate-pulse text-purple-400" />
        </div>
      </div>
    </div>
  );
}