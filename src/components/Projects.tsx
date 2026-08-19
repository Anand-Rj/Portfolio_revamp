import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import { featuredProjects, type PortfolioProject } from '@/data/projects';
import { getAssetPath } from '@/utils/pathUtils';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const navigate = useNavigate();

  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
      <header className="mb-10 flex items-baseline justify-between border-b border-rule pb-4">
        <h2 className="font-mono text-sm tracking-wider text-ink-faint">selected work</h2>
        <button
          onClick={() => navigate('/projects')}
          className="link-underline font-mono text-[13px] text-ink-soft hover:text-ink"
        >
          all projects ↗
        </button>
      </header>

      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
        <ul>
          {featuredProjects.map((project, index) => (
            <li key={project.id}>
              <button
                onClick={() => setSelectedProject(project)}
                className="group grid w-full grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-rule py-8 text-left md:grid-cols-[3rem_1fr_auto] md:gap-x-8"
              >
              <span className="font-mono text-sm text-accent md:pt-2">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-green" />
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                <p className="mt-3 font-mono text-xs text-ink-faint">
                  {project.tech.slice(0, 5).join('  ·  ')}
                </p>
              </div>

              <span className="hidden self-center text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink md:block">
                →
              </span>
              </button>
            </li>
          ))}
        </ul>

        <figure className="order-first mx-auto w-52 self-center overflow-hidden rounded-[1.5rem] border border-rule/70 bg-paper shadow-[0_18px_45px_rgba(35,31,27,0.12)] md:order-last md:mx-0 md:w-60 lg:w-72">
          <img
            src={getAssetPath('/presentation-project-wins-v2.webp')}
            alt="Illustrated Anand presenting data science project wins"
            loading="lazy"
            className="w-full object-contain"
          />
        </figure>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
