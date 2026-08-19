import { getAssetPath } from '@/utils/pathUtils';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  /** Markdown-ish plain text. Rendered as paragraphs split on blank lines. */
  content: string;
  tags: string[];
  cover?: string;
  coverCaption?: string;
  link?: string;
  linkLabel?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'iccre-2024-osaka',
    title: 'Presented precision cashew farming at ICCRE 2024 in Osaka',
    excerpt:
      'How an AI-driven UAV system for cashew disease detection won a Best Presentation Award at the 2024 International Conference on Control and Robotics Engineering.',
    date: '2024-05-15',
    readTime: '4 min read',
    cover: getAssetPath('/award1.jpeg'),
    coverCaption: 'Best Presentation Award, ICCRE 2024, Osaka University, Japan.',
    tags: ['Computer Vision', 'Agriculture', 'IEEE'],
    content: `In May 2024 I presented "Intelligent Drone Design for Precision Cashew Farming" at the 9th International Conference on Control and Robotics Engineering at Osaka University, and came away with the Best Presentation Award.

The project engineered an AI-driven UAV system for automated disease detection in cashew crops, built around a MobileNetV2 model tuned for real-time leaf disease classification. It reached 95% accuracy detecting anthracnose and 99% accuracy identifying healthy leaves, with edge computing handling inference on-device to keep latency low enough for field use.

The work was later published in IEEE Xplore. What stuck with me most from the trip was presenting the paper alongside the Biotech panel at Kyoto University's iCeMS a few days later, where the same project earned an Outstanding Presentation Award. Two very different audiences, both circling the same question: how do you get a model that works in a lab to hold up in a field.`,
  },
  {
    id: 'sunedrion-llm-council',
    title: 'Built Sunedrion, a multi-agent LLM council for enterprise decisions',
    excerpt:
      'Notes on building a multi-agent LLM system that helps Diversified Botanics make faster, better cross-functional decisions.',
    date: '2026-02-10',
    readTime: '5 min read',
    tags: ['Multi-Agent LLM', 'Data Engineering'],
    content: `At Diversified Botanics I built Sunedrion, a multi-agent AI decision intelligence system that orchestrates multiple LLMs to analyze data across sales and supply chain and support leadership decisions.

The core idea is simple: no single model should own a decision that spans functions. Sunedrion routes questions across specialized agents, each grounded in a slice of the underlying Snowflake data warehouses, and synthesizes their outputs into a decision brief a human can act on quickly.

The bigger win wasn't raw model quality, it was streamlining the data workflows underneath the agents. Cleaner schemas and faster refresh cycles across the warehouses did as much for decision speed as the LLM orchestration itself. It's a pattern I keep running into: the model is rarely the bottleneck, the data pipeline usually is.`,
  },
];

export const featuredPost = blogPosts[0];
