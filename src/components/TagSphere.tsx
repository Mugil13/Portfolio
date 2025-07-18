'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text, useTexture } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

interface TechItem {
  name: string;
  category: string;
  img: string;
}

const techStack: TechItem[] = [
  // Languages
  { name: "Python", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Dart", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "C", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Assembly", category: "Languages", img: "/assembly.jpg" },
  { name: "HTML5", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Languages", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

  // Frameworks and Libraries
  { name: "Flutter", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "NodeJS", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Redux", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "TailwindCSS", category: "Frameworks", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

  // ML/DL/AI Tools
  { name: "TensorFlow", category: "ML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", category: "ML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "scikit-learn", category: "ML", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "OpenCV", category: "ML", img: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
  { name: "Keras", category: "ML", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
  { name: "Pandas", category: "ML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", category: "ML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "OmniXAI", category: "ML", img: "/omnixai.png" },
  { name: "Power BI", category: "ML", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },

  // Databases
  { name: "MySQL", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQLite", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "MongoDB", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

  // Cloud & DevOps
  { name: "Google Cloud", category: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", category: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", category: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  // Design
  { name: "Figma", category: "Design", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const categoryColors: Record<string, string> = {
  Languages: "#e74c3c",
  Frameworks: "#3498db", 
  ML: "#2ecc71",
  Database: "#f39c12",
  DevOps: "#9b59b6",
  Design: "#ff6b9d"
};

const positionOnDNA = (index: number, total: number): [number, number, number] => {
  const turns = 5;
  const length = 32;
  const angle = (index / total) * Math.PI * 2 * turns;
  const x = (index / total) * length - length / 2;
  const radius = 4;
  const y = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  return [x, y, z];
};

const DNANode = ({ name, img, position, category }: { name: string; img: string; position: [number, number, number]; category: string }) => {
  const texture = useTexture(img);
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text position={[0, -1.8, 0]} fontSize={0.4} color="white" anchorX="center" anchorY="middle">
        {name}
      </Text>
    </group>
  );
};

const DNAStrands = () => {
  return (
    <group>
      {techStack.map((tech, i) => {
        if (i < techStack.length - 1) {
          const currentPos = positionOnDNA(i, techStack.length);
          const nextPos = positionOnDNA(i + 1, techStack.length);
          
          const distance = Math.sqrt(
            Math.pow(nextPos[0] - currentPos[0], 2) +
            Math.pow(nextPos[1] - currentPos[1], 2) +
            Math.pow(nextPos[2] - currentPos[2], 2)
          );
          
          const midpoint: [number, number, number] = [
            (currentPos[0] + nextPos[0]) / 2,
            (currentPos[1] + nextPos[1]) / 2,
            (currentPos[2] + nextPos[2]) / 2
          ];
          
          const currentTech = techStack[i];
          const nextTech = techStack[i + 1];
          const connectionColor = currentTech.category === nextTech.category 
            ? categoryColors[currentTech.category] || "#555555"
            : "#555555"; 
          
          return (
            <mesh key={`connection-${i}`} position={midpoint}>
              <cylinderGeometry args={[0.08, 0.08, distance, 8]} />
              <meshStandardMaterial color={connectionColor} />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
};

const BackboneStrands = () => {
  const points = techStack.map((_, i) => {
    const pos = positionOnDNA(i, techStack.length);
    return new THREE.Vector3(pos[0], pos[1], pos[2]);
  });

  return (
    <group>
      {points.map((point, i) => {
        if (i < points.length - 1) {
          const nextPoint = points[i + 1];
          const distance = point.distanceTo(nextPoint);
          const midpoint = point.clone().add(nextPoint).multiplyScalar(0.5);
          
          const midpointArray: [number, number, number] = [midpoint.x, midpoint.y, midpoint.z];
          
          return (
            <mesh key={`backbone-${i}`} position={midpointArray}>
              <cylinderGeometry args={[0.04, 0.04, distance, 6]} />
              <meshStandardMaterial color="#666666" transparent opacity={0.6} />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
};

const DNAHelix = ({ isRotating }: { isRotating: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && isRotating) groupRef.current.rotation.x += 0.01;
  });

  return (
    <group ref={groupRef}>
      <BackboneStrands />
      <DNAStrands />
      {techStack.map((tech, i) => (
        <DNANode 
          key={tech.name} 
          name={tech.name} 
          img={tech.img} 
          position={positionOnDNA(i, techStack.length)}
          category={tech.category}
        />
      ))}
    </group>
  );
};

const Legend = () => {
  return (
    <div className="absolute top-4 right-4 bg-black bg-opacity-70 p-4 rounded-lg">
      <h3 className="text-white font-bold mb-3 text-lg">Tech Categories</h3>
      {Object.entries(categoryColors).map(([category, color]) => (
        <div key={category} className="flex items-center mb-2">
          <div 
            className="w-5 h-5 rounded mr-3" 
            style={{ backgroundColor: color }}
          />
          <span className="text-white text-sm font-medium">{category}</span>
        </div>
      ))}
    </div>
  );
};

const RotationToggle = ({ isRotating, setIsRotating }: { isRotating: boolean; setIsRotating: (value: boolean) => void }) => {
  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-70 p-4 rounded-lg">
      <button
        onClick={() => setIsRotating(!isRotating)}
        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
          isRotating 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-600 text-white hover:bg-gray-700'
        }`}
      >
        <span className="mr-2">{isRotating ? '⏸️' : '▶️'}</span>
        {isRotating ? 'Stop Rotation' : 'Click to Rotate'}
      </button>
    </div>
  );
};

const TechCards = () => {
  const techByCategory = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, TechItem[]>);

  return (
    <div className="mt-8 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Technology Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {Object.entries(techByCategory).map(([category, techs]) => (
          <div 
            key={category} 
            className="bg-gray-800 rounded-xl p-6 border-l-4 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            style={{ borderLeftColor: categoryColors[category] || "#555555" }}
          >
            <div className="flex items-center mb-4">
              <div 
                className="w-4 h-4 rounded-full mr-3" 
                style={{ backgroundColor: categoryColors[category] || "#555555" }}
              />
              <h3 className="text-xl font-bold text-white">{category}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {techs.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <img 
                    src={tech.img} 
                    alt={tech.name} 
                    className="w-6 h-6 mr-2 object-contain"
                  />
                  <span className="text-white text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DNAStack = () => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <section className="h-[80vh] w-full relative">
        <Canvas shadows className="rounded-xl">
          <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={60} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-5, -5, -5]} intensity={0.8} />
          <Suspense fallback={null}>
            <DNAHelix isRotating={isRotating} />
          </Suspense>
          <OrbitControls enableZoom={true} autoRotate={false} />
        </Canvas>
        <Legend />
        <RotationToggle isRotating={isRotating} setIsRotating={setIsRotating} />
      </section>
      <TechCards />
    </div>
  );
};

export default DNAStack;