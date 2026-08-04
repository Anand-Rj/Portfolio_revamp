import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Now from '@/components/Now';
import About from '@/components/About';
import Reading from '@/components/Reading';
import WritingTeaser from '@/components/WritingTeaser';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Now />
      <About />
      <Reading />
      <WritingTeaser />
      <ContactFooter />
    </div>
  );
};

export default Index;
