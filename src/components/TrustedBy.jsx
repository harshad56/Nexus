import React from 'react';
import { Layers, Box, Triangle, Hexagon, Circle, Square, Cloud, Database, Code, Terminal } from 'lucide-react';
import '../styles/TrustedBy.css';

const partners = [
  { name: 'Vercel', icon: <Triangle /> },
  { name: 'AWS', icon: <Box /> },
  { name: 'React', icon: <Circle /> },
  { name: 'Node.js', icon: <Hexagon /> },
  { name: 'Figma', icon: <Layers /> },
  { name: 'MongoDB', icon: <Square /> },
  { name: '.NET', icon: <Code /> },
  { name: 'Java', icon: <Terminal /> },
  { name: 'Spring Boot', icon: <Database /> },
  { name: 'Render', icon: <Cloud /> },
];

export default function TrustedBy() {
  // Duplicate array for infinite marquee effect
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="trusted-by">
      <div className="trusted-by__inner">
        <h4 className="trusted-by__label">Engineering Ecosystem & Partners</h4>
        
        <div className="trusted-by__marquee-wrapper">
          <div className="trusted-by__marquee">
            {marqueeItems.map((partner, index) => (
              <div key={index} className="trusted-by__logo">
                <div className="trusted-by__logo-icon">
                  {partner.icon}
                </div>
                <span className="trusted-by__logo-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
