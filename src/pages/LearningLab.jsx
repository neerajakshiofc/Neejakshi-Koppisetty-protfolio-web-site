import React, { useState } from 'react';
import resumeData from '../data/resume.json';
import { Search, ExternalLink, GraduationCap, FileText, Image as ImageIcon, BookOpen as BookIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIES = ['All', 'AI', 'Cloud', 'Cloud/AI', 'Hackathon', 'AI/Agentic'];

const LearningLab = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const formatIcons = {
        'Blog': <BookIcon size={16} />,
        'Document': <FileText size={16} />,
        'Image': <ImageIcon size={16} />,
        'Certificate': <GraduationCap size={16} />,
        'Workshop': <FileText size={16} />
    };

    const filteredLearning = resumeData.learningPlatform.filter(item => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            activeCategory === 'All' || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <motion.div
            className="section-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.header className="mb-12" variants={itemVariants}>
                <h1 className="text-4xl mb-4 gradient-text flex items-center gap-3">
                    <GraduationCap size={40} /> Learning Lab
                </h1>
                <p className="text-text-muted text-lg mb-8">
                    A dedicated space showcasing my continuous growth, certifications, and technical explorations.
                    Use this to see how I keep my skills sharp in the evolving AI landscape.
                </p>

                {/* Search Bar — Option 4: Full width + category pills */}
                <div style={{ width: '100%' }}>

                    {/* Search input */}
                    <div style={{ position: 'relative', width: '100%' }}>
                        <span style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            pointerEvents: 'none',
                            opacity: 0.5,
                        }}>
                            <Search size={22} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by topic or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '20px 24px 20px 56px',
                                fontSize: '17px',
                                borderRadius: '18px',
                                border: '2px solid rgba(255,255,255,0.12)',
                                background: 'rgba(255,255,255,0.06)',
                                color: 'inherit',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                                boxSizing: 'border-box',
                            }}
                            onFocus={e => e.target.style.borderColor = 'var(--color-primary, #a78bfa)'}
                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                        />
                    </div>

                    {/* Category filter pills */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginTop: '16px'
                    }}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '999px',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    border: activeCategory === cat
                                        ? '2px solid var(--color-primary, #a78bfa)'
                                        : '1.5px solid rgba(255,255,255,0.15)',
                                    background: activeCategory === cat
                                        ? 'var(--color-primary, #a78bfa)'
                                        : 'rgba(255,255,255,0.05)',
                                    color: activeCategory === cat
                                        ? '#fff'
                                        : 'rgba(255,255,255,0.6)',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.header>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
            >
                {filteredLearning.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass-card flex flex-col justify-between group"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="badge">{item.category}</span>
                                <div className="text-primary/60 group-hover:text-primary transition-colors">
                                    {formatIcons[item.format || 'Certificate']}
                                </div>
                            </div>
                            <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-text-muted text-sm mb-4">By {item.provider}</p>

                            {item.details && (
                                <p className="text-sm text-text-muted mb-4 leading-relaxed line-clamp-2">
                                    {item.details}
                                </p>
                            )}

                            {item.tools && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tools.map((tool, i) => (
                                        <a
                                            key={i}
                                            href={tool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] bg-primary/5 border border-primary/10 px-2 py-1 rounded-md hover:bg-primary/10 transition-colors no-underline text-primary/80 font-medium"
                                        >
                                            {tool.name}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {item.cloudRunUrl && (
                                <div className="mb-6">
                                    <a
                                        href={item.cloudRunUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary !py-1.5 !px-3 !text-[10px] whitespace-nowrap !shadow-none w-full"
                                    >
                                        Launch Agent
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 border-t border-glass-border flex items-center justify-between">
                            <span className="text-xs text-text-muted italic flex items-center gap-1">
                                {formatIcons[item.format || 'Certificate']} {item.format || 'Certificate'}
                            </span>
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-accent transition-colors flex items-center gap-1 text-xs font-semibold no-underline uppercase tracking-wider"
                                >
                                    View Link <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {filteredLearning.length === 0 && (
                <div className="text-center py-20 text-text-muted">
                    No matching learning tracks found.
                </div>
            )}
        </motion.div>
    );
};

export default LearningLab;
