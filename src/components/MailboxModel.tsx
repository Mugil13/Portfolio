'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Mailbox() {
  const model = useGLTF('/models/mailbox.glb');
  return <primitive object={model.scene} scale={1.5} />;
}

export default function MailboxModel() {
  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Mailbox />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
