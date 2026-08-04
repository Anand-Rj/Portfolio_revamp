import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Monogram from './Monogram';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'work', action: () => goToSection('work') },
    { label: 'now', action: () => goToSection('now') },
    { label: 'writing', action: () => navigate('/blog') },
    { label: 'about', action: () => goToSection('about') },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-rule bg-paper/85 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-3"
          aria-label="Home"
        >
          <Monogram size={36} />
          <span className="flex flex-col items-start leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent md:text-xl">
              <span className="hidden sm:inline">Anand Ramaswamy Jayshree</span>
              <span className="sm:hidden">Anand R. Jayshree</span>
            </span>
            <span className="mt-1 hidden font-mono text-xs uppercase tracking-widest text-ink-faint sm:inline">
              data scientist
            </span>
          </span>
        </button>

        <div className="flex items-center gap-5 md:gap-7">
          {links.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="link-underline font-mono text-[15px] text-ink-soft transition-colors hover:text-ink"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
