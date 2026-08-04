import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    company: string;
    role: string;
    period: string;
    details: string;
    technologies: string[];
    achievements: string[];
  };
}

const ExperienceModal = ({ isOpen, onClose, experience }: ExperienceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-rule bg-paper p-8">
        <DialogHeader className="space-y-2 text-left">
          <p className="eyebrow">{experience.period}</p>
          <DialogTitle className="font-display text-2xl font-normal tracking-tight text-ink">
            {experience.role}, {experience.company}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          <p className="text-[15px] leading-relaxed text-ink-soft">{experience.details}</p>

          <div>
            <p className="eyebrow mb-4">Highlights</p>
            <ul className="space-y-2">
              {experience.achievements.map((a, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-ink-soft">
                  <span className="text-accent">·</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Stack</p>
            <p className="text-[15px] text-ink">{experience.technologies.join('  ·  ')}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
