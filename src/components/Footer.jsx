import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, User, BookOpen, Layers } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="section-container border-t border-glass-border mt-20 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Branding */}
                <div className="max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <Layers size={18} color="white" />
                        </div>
                        <h3 className="text-xl gradient-text font-bold">Neerajakshi Koppisetty</h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                        Software Engineer specializing in AI-driven solutions and agentic workflows.
                        Building the future of intelligent applications.
                    </p>
                </div>

                {/* Nav Buttons */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-1">Navigate</h4>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/"
                            className="flex items-center gap-2 no-underline font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/30 transition-all hover:scale-105"
                        >
                            <User size={15} /> Portfolio
                        </Link>
                        <a
                            href="https://github.com/neerajakshiofc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 no-underline font-semibold px-5 py-2 rounded-full border border-glass-border text-text-muted hover:text-text-main hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-105"
                        >
                            <Github size={15} /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/koppisetty-neerajakshi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 no-underline font-semibold px-5 py-2 rounded-full border border-glass-border text-text-muted hover:text-text-main hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-105"
                        >
                            <Linkedin size={15} /> LinkedIn
                        </a>
                        <Link
                            to="/learning"
                            className="flex items-center gap-2 no-underline font-semibold px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all hover:scale-105"
                        >
                            <BookOpen size={15} /> Learning Lab
                        </Link>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-1">Contact</h4>
                    <a href="mailto:neerajakshikoppisetty@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-text-main no-underline transition-colors text-sm">
                        <Mail size={16} /> neerajakshikoppisetty@gmail.com
                    </a>
                    <a href="tel:+919399904541" className="flex items-center gap-3 text-text-muted hover:text-text-main no-underline transition-colors text-sm">
                        <Phone size={16} /> +91 9399904541
                    </a>
                    <div className="flex items-center gap-3 text-text-muted text-sm">
                        <MapPin size={16} /> Andhra Pradesh, India
                    </div>
                </div>
            </div>

            <div className="text-center text-text-muted mt-16 pt-8 border-t border-glass-border text-sm">
                &copy; {new Date().getFullYear()} Neerajakshi Koppisetty.
            </div>
        </footer>
    );
};

export default Footer;
