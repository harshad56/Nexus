import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogCustomCode from '../assets/images/blog-custom-code.png';
import blogAiSaas from '../assets/images/blog-ai-saas.png';
import blogScaling from '../assets/images/blog-scaling.png';
import '../styles/Insights.css';

const insights = [
  {
    title: 'How Much Does It Cost to Build a Website in India?',
    category: 'Business Strategy',
    readTime: '5 min read',
    date: 'May 28, 2026',
    desc: 'A transparent breakdown of pricing structures, hidden costs, and why templates are killing your brand ROI.',
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

export default function Insights() {
  return (
    <section id="insights" className="insights section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="insights__header">
          <div className="insights__header-left">
            <h2 className="section-header__subtitle" style={{ color: 'var(--accent-blue)', margin: 0 }}>Insights & Articles</h2>
            <h3 className="section-header__title" style={{ textAlign: 'left', margin: '0.5rem 0 0 0' }}>
              Strategic Knowledge For Tech Entrepreneurs
            </h3>
          </div>
          <Link to="/blog" className="insights__view-all">
            View All Articles <ArrowRight size={20} className="insights__link-arrow" />
          </Link>
        </div>

        <div className="insights__grid">
          {insights.map((post, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`insights__card ${isFeatured ? 'insights__card--featured' : ''}`}
              >
                <div className="insights__image">
                  <img src={post.image} alt={post.title} />
                </div>
                
                <div className="insights__body">
                  <span className="insights__category">{post.category}</span>
                  <h4 className="insights__title">{post.title}</h4>
                  <p className="insights__excerpt">{post.desc}</p>
                  
                  <div className="insights__meta">
                    <span className="insights__meta-item">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="insights__meta-item">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <Link to="/blog" className="insights__link">
                    Read Article <ArrowRight size={14} className="insights__link-arrow" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
