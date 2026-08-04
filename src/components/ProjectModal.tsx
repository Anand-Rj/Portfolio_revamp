import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { PortfolioProject } from '@/data/projects';

interface ProjectModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-rule bg-paper p-8">
        <DialogHeader className="space-y-3 text-left">
          <p className="eyebrow">
            {project.category}
            {project.status ? ` · ${project.status}` : ''}
          </p>
          <DialogTitle className="font-display text-3xl font-normal tracking-tight text-ink">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          <p className="text-[15px] leading-relaxed text-ink-soft">{project.fullDescription}</p>

          <div>
            <p className="eyebrow mb-4">What&apos;s in it</p>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-3 text-[15px] text-ink-soft">
                  <span className="text-accent">·</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">The problem</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">{project.challenges}</p>
            </div>
            <div>
              <p className="eyebrow mb-3">The approach</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">{project.solution}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Built with</p>
            <p className="text-[15px] text-ink">{project.tech.join('  ·  ')}</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-6 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-accent"
              >
                {project.liveLabel ?? 'View live'} ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-ink hover:text-accent"
              >
                View code ↗
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
