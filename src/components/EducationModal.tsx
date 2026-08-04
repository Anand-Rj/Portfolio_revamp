import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  education: {
    institution: string;
    degree: string;
    period: string;
    details: string;
    coursework: string[];
    gpa?: string;
  };
}

const EducationModal = ({ isOpen, onClose, education }: EducationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-rule bg-paper p-8">
        <DialogHeader className="space-y-2 text-left">
          <p className="eyebrow">
            {education.period}
            {education.gpa ? ` · ${education.gpa}` : ''}
          </p>
          <DialogTitle className="font-display text-2xl font-normal tracking-tight text-ink">
            {education.degree}
          </DialogTitle>
          <p className="text-[15px] text-ink-soft">{education.institution}</p>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          <p className="text-[15px] leading-relaxed text-ink-soft">{education.details}</p>

          <div>
            <p className="eyebrow mb-3">Coursework</p>
            <p className="text-[15px] text-ink">{education.coursework.join('  ·  ')}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
