import React from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="glass-card flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <Terminal size={24} className="text-primary" />
                </div>
                <div className="flex gap-3">
                    {project.github && (
                        <a href={project.github} className="text-text-muted hover:text-text-main transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} className="text-text-muted hover:text-text-main transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
            </h3>
            <p className="text-sm text-primary/80 font-medium mb-4">
                {project.role}
            </p>

            <ul className="space-y-2 mb-6 flex-grow">
                {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-text-muted text-sm flex gap-2">
                        <span className="text-primary">•</span>
                        {highlight}
                    </li>
                ))}
            </ul>

            {/* Visual indicator for "Agentic" or "AI" focus if present */}
            {(project.title.toLowerCase().includes('agentic') || project.title.toLowerCase().includes('ai')) && (
                <div className="pt-4 border-t border-glass-border">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                        AI Ecosystem Project
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
