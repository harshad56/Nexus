import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogCustomCode from '../assets/images/blog-custom-code.png';
import blogAiSaas from '../assets/images/blog-ai-saas.png';
import blogScaling from '../assets/images/blog-scaling.png';
import '../styles/Insights.css';

const blogPosts = [
  {
    title: 'How Much Does It Cost to Build a Website in India?',
    category: 'Business Strategy',
    readTime: '5 min read',
    date: 'May 28, 2026',
    desc: 'A transparent breakdown of pricing structures, hidden costs, and why templates are killing your brand ROI in 2026.',
    image: blogCustomCode
  },
  {
    title: 'Web App vs Mobile App: What Should Startups Choose First?',
    category: 'Product Development',
    readTime: '6 min read',
    date: 'May 15, 2026',
    desc: 'Analyzing acquisition costs and user behavior to determine the best initial platform for your startup launch.',
    image: blogAiSaas
  },
  {
    title: 'Custom Software vs WordPress: The Ultimate Guide',
    category: 'Technical Architecture',
    readTime: '8 min read',
    date: 'May 02, 2026',
    desc: 'When to rely on CMS platforms and when your business logic demands a fully custom-engineered React architecture.',
    image: blogScaling
  }
];

export default function BlogPage() {
  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="gradient-sphere" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>
      <div className="gradient-sphere" style={{ bottom: '10%', right: '-20%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)', position: 'absolute', pointerEvents: 'none' }}></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
            Insights & <span className="text-gradient">Articles</span>
          </h1>
          <p className="section-header__desc" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
            Strategic knowledge, industry trends, and technical best practices for tech entrepreneurs and startups looking to scale.
          </p>
        </div>

        <div className="insights__grid" style={{ marginTop: '5rem' }}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="insights__card"
            >
              <div className="insights__image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="insights__body">
                <span className="insights__category">{post.category}</span>
                <h2 className="insights__title" style={{ fontSize: '1.35rem', margin: '0.2rem 0' }}>{post.title}</h2>
                <p className="insights__excerpt" style={{ margin: '0.5rem 0 1rem 0' }}>{post.desc}</p>
                
                <div className="insights__meta">
                  <span className="insights__meta-item">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="insights__meta-item">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <Link to="#" className="insights__link" onClick={(e) => e.preventDefault()}>
                  Read Article <ArrowRight size={14} className="insights__link-arrow" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
