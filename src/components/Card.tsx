'use client';

interface AboutCardProps {
  title: string;
  subtitle: string;
  year: string;
  description: string;
}

export default function AboutCard({ title, subtitle, year, description }: AboutCardProps) {
  return (
    <div className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        <p className="text-sm text-blue-500">{subtitle}</p>
        <p className="text-xs text-gray-400 italic">{year}</p>
      </div>
      <p className="text-sm text-gray-700 mt-3">{description}</p>
    </div>
  );
}
