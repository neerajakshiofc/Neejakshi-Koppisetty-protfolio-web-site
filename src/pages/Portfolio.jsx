import React from 'react';
import resumeData from '../data/resume.json';
import SkillsGrid from '../components/SkillsGrid';
import ProjectCard from '../components/ProjectCard';
import { Briefcase, Rocket, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 }
        }
    };
    return (
        <motion.div
            className="section-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Hero Section */}
            <motion.header className="mb-24 pt-10" variants={containerVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                    <Star size={14} fill="currentColor" /> Let's Build Something Intelligent Together
                </div>
                <h1 className="text-5xl md:text-8xl mb-6 font-extrabold tracking-tight">
                    Building <span className="gradient-text">Cloud & Agentic</span> <br />
                    Solutions for the Future.
                </h1>
                <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-10">
                    Hi, I'm Neerajakshi Koppisetty <br /> <span className="text-text-main font-semibold">{resumeData.personalInfo.name}</span>
                    {resumeData.personalInfo.title}
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="btn-primary">
                        View My Work <Rocket size={20} />
                    </a>
                    <Link to="/learning" className="btn-primary" style={{ background: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)' }}>
                        Explore Learning Lab <BookOpen size={20} />
                    </Link>
                </div>
            </motion.header>

            {/* About Section */}
            <motion.section className="mb-32" variants={containerVariants}>
                <h2 className="text-3xl mb-10 border-l-4 border-primary pl-4">About Me</h2>
                <p className="text-xl text-text-muted leading-relaxed max-w-4xl">
                    {resumeData.personalInfo.profile}
                </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section className="mb-32" id="skills" variants={containerVariants}>
                <h2 className="text-3xl mb-10 border-l-4 border-secondary pl-4">Technical Arsenal</h2>
                <SkillsGrid />
            </motion.section>

            {/* Projects Section */}
            <motion.section className="mb-32" id="projects" variants={containerVariants}>
                <h2 className="text-3xl mb-12 border-l-4 border-accent pl-4">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section className="mb-32" id="experience" variants={containerVariants}>
                <h2 className="text-3xl mb-12 border-l-4 border-primary pl-4 flex items-center gap-3">
                    <Briefcase className="text-primary" /> Professional Journey
                </h2>
                <div className="space-y-12">
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l border-glass-border">
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <span className="text-primary font-medium">{exp.period}</span>
                            </div>
                            <p className="text-lg text-secondary font-medium mb-4">{exp.company}</p>
                            <ul className="space-y-3">
                                {exp.highlights.map((h, i) => (
                                    <li key={i} className="text-text-muted flex gap-2">
                                        <span className="text-primary/50">›</span> {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Portfolio;
