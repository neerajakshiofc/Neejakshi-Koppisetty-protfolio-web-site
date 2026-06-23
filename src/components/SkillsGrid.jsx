import React from 'react';
import resumeData from '../data/resume.json';
import {
    Code2,
    Cpu,
    Cloud,
    Globe,
    Database,
    Settings
} from 'lucide-react';

const SkillsGrid = () => {
    const iconMap = {
        AI_ML: <Cpu className="text-primary" />,
        ProgrammingLanguages: <Code2 className="text-secondary" />,
        Cloud_DevOps: <Cloud className="text-accent" />,
        WebDevelopment: <Globe className="text-primary" />,
        Databases: <Database className="text-secondary" />,
        Tools: <Settings className="text-accent" />
    };

    const labels = {
        AI_ML: "AI & Machine Learning",
        ProgrammingLanguages: "Programming",
        Cloud_DevOps: "Cloud & DevOps",
        WebDevelopment: "Backend & API Development",
        Databases: "Databases",
        Tools: "Developer Tools"
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(resumeData.skills).map(([key, skills]) => (
                <div key={key} className="glass-card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-glass border border-glass-border">
                            {iconMap[key]}
                        </div>
                        <h3 className="text-xl font-bold">{labels[key]}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span key={i} className="badge">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsGrid;
