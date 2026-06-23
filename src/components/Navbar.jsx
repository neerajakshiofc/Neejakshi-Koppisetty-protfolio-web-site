import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, BookOpen, User, Github, Linkedin, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItemClass = 'flex items-center gap-2 px-4 py-2 rounded border border-primary/40 !text-primary hover:!shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-200 flex-shrink-0';

  return (
    <nav className="flex items-center justify-between gap-4 px-4 py-3">
      {/* Portfolio Link */}
      <Link
        to="/"
        className={`flex items-center gap-2 no-underline ${location.pathname === '/'
          ? 'btn-primary'
          : 'btn-primary !bg-transparent border border-primary/40 !text-primary hover:!shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          }`}
      >
        <User size={16} />
        <span className="hidden sm:inline">Portfolio</span>
      </Link>

      {/* GitHub */}
      <a
        href="https://github.com/neerajakshiofc"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary !bg-transparent border border-primary/40 !text-primary hover:!shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2"
      >
        <Github size={16} />
        <span className="text-sm font-medium">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/koppisetty-neerajakshi/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary !bg-transparent border border-primary/40 !text-primary hover:!shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2"
      >
        <Linkedin size={16} />
        <span className="text-sm font-medium">LinkedIn</span>
      </a>

      {/* Learning Lab Link */}
      <Link
        to="/learning"
        className={`flex items-center gap-2 no-underline ${location.pathname === '/learning'
          ? 'btn-primary'
          : 'btn-primary !bg-transparent border border-primary/40 !text-primary hover:!shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          }`}
      >
        <BookOpen size={16} />
        <span className="text-sm font-medium">Learning Lab</span>
      </Link>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="btn-primary !bg-transparent border border-primary/40 !text-primary hover:!shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2 cursor-pointer ml-4"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        <span className="text-sm font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </nav>
  );
};

export default Navbar;
