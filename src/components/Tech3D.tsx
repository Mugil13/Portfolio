'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Tech3D() {
  return (
    <Spline scene="https://prod.spline.design/NtJaetqcWlBKhfrj/scene.splinecode" />
  );
}
