import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useToast } from '../components/Toast';
import blogCustomCode from '../assets/images/blog-custom-code.png';
import blogAiSaas from '../assets/images/blog-ai-saas.png';
import blogScaling from '../assets/images/blog-scaling.png';
import '../styles/Insights.css';
import '../styles/SubPages.css';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const toast = useToast();

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const totalWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const maxIndex = blogPosts.length - 1;

    let index = 0;
    if (totalWidth > 0) {
      index = Math.round((scrollPosition / totalWidth) * maxIndex);
    }
    setActiveIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  const handleReadArticle = (e, title) => {
    e.preventDefault();
    toast(`"${title}" — Full article coming soon!`, 'info');
  };

  return (
    <div className="subpage-layout">
      {/* Decorative Spheres */}
      <div className="subpage__sphere subpage__sphere--top-left"></div>
      <div className="subpage__sphere subpage__sphere--bottom-right"></div>

      <div className="section subpage-section">
        <div className="section-header">
          <h1 className="subpage__hero-title">
            Insights & <span className="text-gradient">Articles</span>
          </h1>
          <p className="section-header__desc subpage__desc">
            Strategic knowledge, industry trends, and technical best practices for tech entrepreneurs and startups looking to scale.
          </p>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="insights__grid insights__grid--spaced"
        >
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
                <h2 className="insights__title insights__title--large">{post.title}</h2>
                <p className="insights__excerpt">{post.desc}</p>
                
                <div className="insights__meta">
                  <span className="insights__meta-item">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="insights__meta-item">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <a
                  href="#"
                  className="insights__link"
                  onClick={(e) => handleReadArticle(e, post.title)}
                >
                  Read Article <ArrowRight size={14} className="insights__link-arrow" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile scroll indicator dots */}
        <div className="mobile-dots">
          {blogPosts.map((_, idx) => (
            <div 
              key={idx} 
              className={`mobile-dot ${idx === activeIndex ? 'mobile-dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
