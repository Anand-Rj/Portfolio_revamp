import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import ProjectModal from '@/components/ProjectModal';
import { projectCategories, projects, type PortfolioProject } from '@/data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const filtered =
    category === 'All' ? projects : projects.filter((p) => p.category === category);

  return (
    <div className="relative z-10 min-h-screen">
      <Navigation />
      <SocialIsland />

      <main className="mx-auto max-w-5xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
        <button
          onClick={() => navigate('/')}
          className="link-underline mb-12 text-sm text-ink-soft hover:text-ink"
        >
          ← Home
        </button>

        <header className="mb-12 max-w-xl">
          <h1 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            All projects
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Data engineering, applied AI, and a growing pile of distributed-systems
            experiments written to understand the layer below.
          </p>
        </header>

        <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 border-b border-rule pb-5">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`font-mono text-[13px] transition-colors ${
                category === c ? 'text-accent' : 'text-ink-faint hover:text-ink'
              }`}
            >
              {c}
              {category === c && c !== 'All' ? ` (${filtered.length})` : ''}
            </button>
          ))}
        </div>

        <ul>
          {filtered.map((project, index) => (
            <li key={project.id}>
              <button
                onClick={() => setSelectedProject(project)}
                className="group grid w-full grid-cols-[auto_1fr] gap-x-5 border-b border-rule py-7 text-left md:grid-cols-[3rem_1fr_8rem] md:gap-x-8"
              >
                <span className="font-mono text-sm text-accent md:pt-1.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h2 className="font-display text-xl font-normal tracking-tight text-ink transition-colors group-hover:text-accent md:text-2xl">
                      {project.title}
                    </h2>
                    {project.status && (
                      <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-green">
                        <span className="h-1.5 w-1.5 rounded-full bg-green" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-ink-faint">{project.tech.slice(0, 5).join('  ·  ')}</p>
                </div>
                <span className="hidden self-start pt-1.5 font-mono text-[13px] text-ink-faint md:block">
                  {project.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </main>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;
