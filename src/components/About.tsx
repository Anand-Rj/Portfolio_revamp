import { useState } from 'react';
import { getAssetPath } from '@/utils/pathUtils';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  image: string;
  details: string;
  technologies: string[];
  achievements: string[];
}

interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  image: string;
  details: string;
  coursework: string[];
}

const experiences: Experience[] = [
  {
    company: 'Quick Visit Medical Office',
    role: 'Clinical Data Analyst',
    location: 'Phoenix, AZ',
    period: 'Jun 2026 — Present',
    current: true,
    image: getAssetPath('/quick-visit-medical-logo.png'),
    details:
      'Improved physician documentation efficiency by 80% under the supervision of Dr. Shashi Jain Goel by developing an AI-powered clinical notes application that converts recorded physician–patient conversations into structured SOAP notes and integrates them with patients\' electronic medical records (EMRs), while analyzing clinical data to enhance patient experience and clinic operations.',
    technologies: ['AI', 'Clinical NLP', 'EMR Integration', 'Python'],
    achievements: [
      'Improved physician documentation efficiency by 80% with an AI-powered clinical notes application',
      'Converted recorded physician–patient conversations into structured SOAP notes integrated with patients\' EMRs',
      'Analyzed clinical data to enhance patient experience and clinic operations',
    ],
  },
  {
    company: 'Dept. of Computer Science, University of Arizona',
    role: 'Research Volunteer',
    location: 'Tucson, AZ',
    period: 'May 2026 — Present',
    current: true,
    image: getAssetPath('/university-of-arizona-logo.png'),
    details:
      'Advancing inverse reinforcement learning research under the supervision of Dr. Chicheng Zhang by reviewing relevant literature, implementing reinforcement learning algorithms, designing experiments, and analyzing the resulting models.',
    technologies: ['Reinforcement Learning', 'Inverse RL', 'Python'],
    achievements: [
      'Advancing inverse reinforcement learning research under the supervision of Dr. Chicheng Zhang',
      'Reviewing literature, implementing RL algorithms, and designing experiments to analyze models',
    ],
  },
  {
    company: 'Diversified Botanics',
    role: 'Data Specialist',
    location: 'Draper, UT',
    period: 'Nov 2025 — Mar 2026',
    image: getAssetPath('/diversified-botanics-logo.png'),
    details:
      'Improved cross-functional decision making across sales and supply chain by streamlining data workflows across Snowflake data warehouses and developing "Sunedrion," a multi-agent LLM Council resulting in enhanced data quality, faster insight generation, and more effective AI-driven decision support for leadership.',
    technologies: ['Snowflake', 'Multi-Agent LLMs', 'Python', 'Data Warehousing'],
    achievements: [
      'Built Sunedrion, a multi-agent LLM Council orchestrating multiple models to analyze cross-functional data and automate decision-making',
      'Streamlined data workflows across Snowflake warehouses, improving data quality and insight generation speed',
    ],
  },
  {
    company: 'Vivega Business LLC',
    role: 'Data Scientist Intern',
    location: 'Philadelphia, PA',
    period: 'Jul 2025 — Nov 2025',
    image: getAssetPath('/vivega-logo.png'),
    details:
      'Built an end-to-end AWS-integrated executive dashboard using Python, Streamlit, and Amazon Bedrock that enabled non-technical healthcare analysts to query four years of CMS Star Rating and Risk Score data in natural language.',
    technologies: ['AWS', 'Amazon Bedrock', 'Python', 'Streamlit'],
    achievements: [
      'Reduced manual analysis time by 60% with a natural-language query interface over CMS Star Rating and Risk Score data',
      'Delivered real-time contract-level insights for non-technical healthcare analysts',
    ],
  },
  {
    company: 'Dept. of Neurosurgery, University of Arizona',
    role: 'Research Engineer Technician (Data Scientist)',
    location: 'Tucson, AZ',
    period: 'Jan 2025 — May 2025',
    image: getAssetPath('/university-of-arizona-logo.png'),
    details:
      'Developed a mobile app for patient data collection, insight generation, and trend prediction for ongoing research, integrating generative AI models within the Paradigm framework to create research-specific images.',
    technologies: ['Generative AI', 'Mobile Development', 'Python'],
    achievements: [
      'Built a mobile app for patient data collection and trend prediction',
      'Integrated generative AI into the Paradigm research framework for image synthesis',
    ],
  },
  {
    company: 'Dept. of Electronics and Computer Engineering, University of Arizona',
    role: 'AI-HDL Mentor',
    location: 'Tucson, AZ',
    period: 'Oct 2024 — Dec 2024',
    image: getAssetPath('/university-of-arizona-logo.png'),
    details:
      'Contributed to AI-HDL, a competition bridging AI and hardware for the silicon industry, serving on the planning committee to strategize execution and acting as a technical advisor to participants.',
    technologies: ['AI', 'Hardware Design'],
    achievements: [
      'Served on the planning committee for an AI/hardware bridging competition',
      'Acted as technical advisor to competition participants',
    ],
  },
  {
    company: 'Motherson Technology Service Limited',
    role: 'Data Scientist',
    location: 'Chennai, India',
    period: 'Jul 2021 — May 2023',
    image: getAssetPath('/motherson-logo.png'),
    details:
      'In-house proof-of-concept work included a Python-based OCR application using computer vision to extract data from mechanical drawings. Client work included embedded C software for Saint-Gobain (automated sunroof tinting) and ESAB (Warrior EDGE machine HMI), following Agile SDLC/STLC.',
    technologies: ['Python', 'Computer Vision', 'OCR', 'Embedded C', 'Agile'],
    achievements: [
      'Developed a Python-based OCR application to extract data from mechanical drawings into Excel',
      'Built embedded C software for Saint-Gobain automated sunroof tinting systems',
      'Developed the Power Source HMI software for ESAB\'s Warrior EDGE machine',
    ],
  },
];

const educations: Education[] = [
  {
    institution: 'University of Arizona',
    degree: 'M.S., Information Science',
    location: 'Tucson, AZ',
    period: 'May 2025',
    image: getAssetPath('/university-of-arizona-logo.png'),
    details:
      'Coursework spanning deep learning, machine learning, artificial intelligence, data analytics, and data ethics, with a capstone project on journal recommendation systems.',
    coursework: ['Deep Learning', 'Machine Learning', 'AI', 'Data Analytics', 'Data Ethics', 'Capstone Project'],
  },
  {
    institution: 'Texas McCombs (UT Austin)',
    degree: 'Post Graduate Program, Data Science and Business Analytics',
    location: 'Austin, TX',
    period: 'Aug 2022 — Aug 2023',
    image: getAssetPath('/ut-austin-logo.png'),
    details: 'Postgraduate program in data science and business analytics through the McCombs School of Business.',
    coursework: ['Data Science', 'Business Analytics', 'Statistics'],
  },
  {
    institution: 'Easwari Engineering College (Anna University)',
    degree: 'B.E., Electronics and Communication Engineering',
    location: 'Chennai, India',
    period: 'Aug 2016 — Aug 2020',
    image: getAssetPath('/anna-university-logo.png'),
    details: 'Foundation in electronics and communication engineering, affiliated with Anna University.',
    coursework: ['Electronics', 'Communication Systems', 'Signal Processing'],
  },
];

interface Achievement {
  title: string;
  place: string;
  date: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    title: 'Best Presentation Award — IEEE ICCRE 2024',
    place: 'Osaka University, Japan',
    date: 'May 2024',
    description:
      'Presented "Intelligent Drone Design for Precision Cashew Farming" at the 9th International Conference on Control and Robotics Engineering and won Best Presentation.',
    image: getAssetPath('/award1.jpeg'),
  },
  {
    title: 'Outstanding Presentation Award — iCeMS, Kyoto University',
    place: 'Kyoto, Japan',
    date: 'May 2024',
    description:
      'Presented the cashew farming research to the Biotech Panel at the World Premier International Research Centre Initiative, and was recognized with an Outstanding Presentation Award.',
    image: getAssetPath('/kyoto.jpg'),
  },
  {
    title: '$1,000 Pre-Seed Funding — Startup Wildcats',
    place: 'Tucson, AZ',
    date: 'Mar 2025',
    description:
      'Pitched a startup idea in front of a judge panel and guests, and was awarded $1,000 in pre-seed funding to develop the product into its next phase.',
    image: getAssetPath('/hygrivix1.jpg'),
  },
  {
    title: 'Startup Wildcats — Pitch Day',
    place: 'Tucson, AZ',
    date: 'Mar 2025',
    description:
      'On stage in front of the panel and audience at the Startup Wildcats pitch event, presenting the idea that would become Hygrivix.',
    image: getAssetPath('/hygrivix2.jpg'),
  },
];

// How I think — short, honest principles. Not a resume.
const principles = [
  {
    head: 'Data quality is the model.',
    body: 'A model trained on messy, unvalidated data is just noise with extra steps. I would rather spend the time on the pipeline than chase a benchmark on bad inputs.',
  },
  {
    head: 'Let deterministic checks verify AI reasoning.',
    body: 'I like systems where an LLM proposes and a deterministic layer validates. Reasoning where it helps, hard guarantees where they count.',
  },
  {
    head: 'Ship insight, not just accuracy.',
    body: 'A model that non-technical stakeholders can actually query and act on beats a marginally better one nobody uses.',
  },
];

const AboutSubheading = ({
  label,
  image,
  imageAlt,
}: {
  label: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <div className="mb-8 flex min-h-28 items-center justify-between gap-6 border-y border-rule bg-gradient-to-r from-paper-deep/45 to-transparent px-4 py-3 md:min-h-36 md:px-5">
      <div className="flex items-center gap-3">
        <span className="h-7 w-1 rounded-full bg-accent/70" aria-hidden="true" />
        <p className="eyebrow">{label}</p>
      </div>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-rule/70 bg-paper shadow-[0_12px_28px_rgba(35,31,27,0.12)] md:h-28 md:w-28">
        <img
          src={getAssetPath(image)}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-contain p-1"
        />
      </div>
    </div>
  );
};

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
      {/* Bio */}
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
        <figure className="order-last mx-auto w-48 flex-shrink-0 md:mx-0 md:w-56 lg:w-64">
          <img
            src={getAssetPath('/minime-building.webp')}
            alt="Illustrated mini-me of Anand kneeling, building a robot and circuit board"
            loading="lazy"
            className="w-full object-contain drop-shadow-[0_18px_22px_rgba(35,31,27,0.18)]"
            style={{ aspectRatio: '1 / 1' }}
          />
          <figcaption className="mt-2 hidden border-t border-rule pt-2 text-center font-mono text-[11px] text-ink-faint md:block">
            building, day to day
          </figcaption>
        </figure>

        <div className="max-w-2xl">
          <p className="eyebrow mb-6">about</p>
          <div className="space-y-5 font-display text-xl font-medium leading-relaxed text-ink md:text-2xl">
            <p>
              I&apos;m Anand, a data scientist who got curious about what makes
              AI systems trustworthy enough to act on.
            </p>
            <p className="font-normal text-ink-soft">
              Most of my work sits at the intersection of data engineering,
              machine learning, and generative AI: multi-agent LLM councils for
              enterprise decision support, clinical and agricultural computer
              vision, and RAG-driven assistants. The further I went, the more I
              wanted every layer, from the data pipeline to the model output,
              to hold up under scrutiny.
            </p>
          </div>
        </div>
      </div>

      {/* How I think */}
      <div className="mt-20">
        <AboutSubheading
          label="how i think"
          image="/minime-reading-sit.webp"
          imageAlt="Illustrated Anand reading and thinking"
        />
        <div className="grid gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.head}>
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {p.head}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <AboutSubheading
          label="where i've worked"
          image="/minime-laptop.webp"
          imageAlt="Illustrated Anand working on a laptop"
        />
        <div className="space-y-3">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setSelectedExperience(exp)}
              className="group block w-full border-l-2 border-rule bg-paper-deep/40 p-5 text-left transition-colors hover:border-accent hover:bg-paper-deep/70 md:p-7"
            >
              <div className="grid gap-x-6 gap-y-4 md:grid-cols-[auto_1fr]">
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="h-12 w-12 flex-shrink-0 rounded-lg bg-paper object-contain p-1.5 md:h-14 md:w-14"
                  />
                  <span className="font-mono text-[13px] text-ink-faint">{exp.period}</span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent md:text-2xl">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-green">
                        <span className="h-1.5 w-1.5 rounded-full bg-green" /> current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-ink-soft">
                    {exp.role} <span className="text-ink-faint">· {exp.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-mono text-xs text-ink-faint">
                    {exp.technologies.join('  ·  ')}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <AboutSubheading
          label="studied at"
          image="/education-graduate-clean.webp"
          imageAlt="Illustrated Anand celebrating graduation"
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {educations.map((edu) => (
            <button
              key={edu.institution}
              onClick={() => setSelectedEducation(edu)}
              className="group block border-l-2 border-rule bg-paper-deep/40 p-5 text-left transition-colors hover:border-accent hover:bg-paper-deep/70 md:p-6"
            >
              <div className="flex items-start gap-4">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="h-12 w-12 flex-shrink-0 rounded-lg bg-paper object-contain p-1.5"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[12px] font-semibold text-accent">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="font-mono text-[11px] text-accent">GPA {edu.gpa}</span>
                    )}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {edu.institution}
                  </h3>
                  <p className="font-mono text-[13px] text-ink-soft">{edu.degree}</p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-ink-faint">
                    {edu.coursework.join('  ·  ')}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Academic Achievements */}
      <div className="mt-16">
        <AboutSubheading
          label="academic achievements"
          image="/achievement-trophy-clean.webp"
          imageAlt="Illustrated Anand holding a gold achievement trophy"
        />
        <div className="flex flex-col gap-10">
          {achievements.map((ach) => (
            <div key={ach.title} className="border border-rule bg-paper-deep/30">
              <div className="flex items-center justify-center bg-paper-deep/60 p-3">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="max-h-[520px] w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-1.5 border-t border-rule p-5 text-center">
                <span className="font-mono text-[11px] text-ink-faint">{ach.date} · {ach.place}</span>
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {ach.title}
                </h3>
                <p className="max-w-md text-[14px] leading-relaxed text-ink-soft">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />
      )}
      {selectedEducation && (
        <EducationModal
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          education={selectedEducation}
        />
      )}
    </section>
  );
};

export default About;
