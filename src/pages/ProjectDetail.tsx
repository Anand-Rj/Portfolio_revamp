
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const project = {
    title: "Project Title",
    description: "Detailed project description goes here. This is a comprehensive overview of what the project does, the challenges it solves, and the impact it has.",
    image: "/placeholder.svg",
    category: "Web Development",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Responsive design that works across all devices",
      "Modern UI/UX with smooth animations",
      "Fast performance and optimized loading",
      "Accessible and user-friendly interface"
    ],
    challenges: "The main challenge was creating a seamless user experience while maintaining high performance standards.",
    solution: "We implemented a component-based architecture with optimized state management and lazy loading for better performance."
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialIsland />
      <main className="pt-24 pb-20 px-2 md:px-6 relative">
        <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm px-4 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-8 hover:bg-slate-100"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Button>
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  <ExternalLink size={20} className="mr-2" />
                  View Live
                </Button>
                <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
                  <Github size={20} className="mr-2" />
                  View Code
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Additional project details would go here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
