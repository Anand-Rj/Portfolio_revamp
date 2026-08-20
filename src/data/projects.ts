import {
  BarChart3,
  Brain,
  Cpu,
  Database,
  Network,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { getAssetPath } from '@/utils/pathUtils';

export type ProjectCategory =
  | 'Data Engineering'
  | 'AI'
  | 'Distributed Systems'
  | 'ML';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ProjectCategory;
  status?: string;
  sortRank?: number;
  tech: string[];
  fullDescription: string;
  features: string[];
  challenges: string;
  solution: string;
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
  image?: string;
  featured?: boolean;
}

const projectItems: PortfolioProject[] = [
  {
    id: 'talentcard',
    title: '👨‍💻 Talentcard (Stealth project by Hygrivix)',
    description: 'An AI powered EdTech platform combining multi agent orchestration, video generation, and community building.',
    icon: Brain,
    category: 'AI',
    status: 'In development',
    sortRank: 5,
    tech: ['AI', 'Multi Agent AI', 'EdTech', 'Generative Video', 'Community Building'],
    fullDescription: 'Developing an AI powered EdTech platform. The product combines multi agent orchestration, video generation, and community building, being built in stealth under Hygrivix. More details coming soon.',
    features: [
      'Multi agent orchestration',
      'Video generation',
      'Community building',
    ],
    challenges: 'Full details are being kept under wraps until closer to launch.',
    solution: 'In active stealth development under Hygrivix, more to be shared as the product nears release.',
    featured: true,
  },
  {
    id: 'kraph',
    title: '📰 Kraph (Stealth project by Hygrivix)',
    description: 'An intelligent AI news platform combining multi-agent orchestration, intelligent search and mapping, and production-ready infrastructure.',
    icon: Network,
    category: 'AI',
    status: 'In development',
    sortRank: 6,
    tech: ['AI', 'Multi-Agent AI', 'Personalization'],
    fullDescription: 'Developing an intelligent AI news platform. The project combines multi-agent orchestration, intelligent search and mapping, and production-ready infrastructure. Being built in stealth under Hygrivix — more details coming soon.',
    features: [
      'Multi-agent orchestration',
      'Intelligent search and mapping',
      'Production-ready infrastructure',
    ],
    challenges: 'Full details are being kept under wraps until closer to launch.',
    solution: 'In active stealth development under Hygrivix — more to be shared as the product nears release.',
    featured: true,
  },
  {
    id: 'sunedrion',
    title: 'Sunedrion — LLM Council',
    description: 'A multi-agent AI decision intelligence system built for Diversified Botanics, where each LLM agent takes on an executive role, such as CEO, CFO, CTO, or COO, to help leadership prepare for board-level decisions.',
    icon: Network,
    category: 'AI',
    status: 'In production',
    sortRank: 10,
    tech: ['Multi-Agent LLMs', 'Snowflake', 'Python'],
    fullDescription: 'At Diversified Botanics I built Sunedrion, a multi-agent AI decision intelligence system that orchestrates multiple LLMs, each assigned to an executive persona (CEO, CFO, CTO, COO), to analyze cross-functional sales and supply chain data and support leadership decisions. The core idea is simple: no single model should own a decision that spans functions. Sunedrion routes questions across specialized agents, each grounded in a slice of the underlying Snowflake data warehouses, and synthesizes their outputs into a decision brief a human can act on quickly, helping a real executive prepare for the questions and viewpoints their fellow board members are likely to raise before a board meeting. The bigger win wasn\'t raw model quality, it was streamlining the data workflows underneath the agents. Cleaner schemas and faster refresh cycles across the warehouses did as much for decision speed as the LLM orchestration itself. It\'s a pattern I keep running into: the model is rarely the bottleneck, the data pipeline usually is.',
    features: [
      'Multi-agent LLM orchestration, with each agent assigned an executive persona (CEO, CFO, CTO, COO)',
      'Cross-functional data analysis across sales and supply chain',
      'Board-meeting preparation support, anticipating questions and viewpoints from other executives',
      'Improved leadership readiness and faster, more strategically accurate decision-making',
    ],
    challenges: 'Leadership needed faster, higher-quality insight generation from fragmented data across teams and Snowflake warehouses, and better preparation for the range of perspectives raised in board-level discussions.',
    solution: 'Built a multi-agent LLM Council where each agent role-plays a specific executive position, giving leadership a way to rehearse cross-functional data-driven questions and viewpoints before real board meetings, improving both decision speed and quality.',
    featured: true,
  },
  {
    id: 'emergency-aid-plus',
    title: 'Emergency Aid+',
    description: 'An AI-powered first-aid assistant combining an image diffusion model for injury detection with RAFT (Retrieval-Augmented Fine-Tuning) for medical reasoning.',
    icon: Brain,
    category: 'AI',
    sortRank: 20,
    tech: ['Image Diffusion Model', 'RAFT', 'OpenAI API', 'Streamlit'],
    fullDescription: 'Emergency Aid+ combines an image diffusion model for injury detection with a RAFT (Retrieval-Augmented Fine-Tuning) approach for medical reasoning, fine-tuning the model on a curated set of injury images to deliver physician-verified first-aid recommendations, deployed via Streamlit.',
    features: [
      'Injury detection via an image diffusion model',
      'RAFT (Retrieval-Augmented Fine-Tuning) medical reasoning, fine-tuned on a curated injury image dataset',
      'Physician-verified recommendation output',
    ],
    challenges: 'First-aid guidance needs to be both fast and clinically reliable, which is hard to guarantee with a single model.',
    solution: 'Paired image diffusion-based injury classification with a retrieval-augmented, fine-tuned reasoning layer grounded in verified medical sources.',
    image: getAssetPath('/placeholder.svg'),
    featured: true,
  },
  {
    id: 'chronic-pain-scs',
    title: 'Attentional Bias in Chronic Pain',
    description: 'Synthetic medical image generation pipeline studying the effects of spinal cord stimulation, built for neurosurgical research.',
    icon: Brain,
    category: 'ML',
    sortRank: 30,
    tech: ['Stable Diffusion', 'ControlNet', 'OpenAI API'],
    fullDescription: 'Developed a synthetic medical image generation pipeline using Stable Diffusion, ControlNet, and the OpenAI API to augment pain vs. no-pain datasets for neurosurgical research.',
    features: [
      'Synthetic dataset augmentation for pain vs. no-pain classification',
      'Stable Diffusion and ControlNet-based image generation',
    ],
    challenges: 'Neurosurgical pain research datasets are small and expensive to collect.',
    solution: 'Generated controlled synthetic images to augment training data, improving model generalization while cutting data collection costs by 40%.',
    image: getAssetPath('/placeholder.svg'),
  },
  {
    id: 'livebreak',
    title: 'Livebreak — Intelligent News Recommendation',
    description: 'A personalized news recommendation system using neural collaborative filtering and transformer embeddings, deployed via FastAPI.',
    icon: Database,
    category: 'AI',
    sortRank: 40,
    tech: ['NCF', 'SentenceTransformer', 'RAG', 'FastAPI'],
    fullDescription: 'Engineered a personalized news recommendation system using neural collaborative filtering (NCF) and transformer-based embeddings (SentenceTransformer), integrating user interaction modeling and RAG-inspired cold-start retrieval, deployed via FastAPI.',
    features: [
      'Neural collaborative filtering for personalized recommendations',
      'Transformer-based embeddings via SentenceTransformer',
      'RAG-inspired retrieval to handle the cold-start problem',
      'Deployed as a FastAPI service',
    ],
    challenges: 'New users and new articles both suffer from the cold-start problem in recommendation systems.',
    solution: 'Combined transformer embeddings with RAG-inspired retrieval to improve recommendations for both new users and new content, enhancing discovery and retention.',
    image: getAssetPath('/placeholder.svg'),
  },
  {
    id: 'cashew-drone',
    title: 'Precision Cashew Farming Drone',
    description: 'AI-driven UAV system for automated disease detection in cashew crops. Published in IEEE Xplore.',
    icon: Cpu,
    category: 'ML',
    sortRank: 50,
    tech: ['MobileNetV2', 'Computer Vision', 'Edge Computing'],
    fullDescription: 'Engineered an AI-driven UAV system for automated disease detection and precision agriculture, integrating MobileNetV2 for real-time leaf disease classification with on-device edge processing.',
    features: [
      '95% accuracy detecting anthracnose disease',
      '99% accuracy identifying healthy leaves',
      'Edge computing for low-latency, on-device inference',
    ],
    challenges: 'Manual crop disease monitoring is slow and doesn\'t scale across large farms.',
    solution: 'Deployed a MobileNetV2 classifier on-device via UAV for real-time, low-latency disease detection in the field.',
    liveUrl: 'https://ieeexplore.ieee.org/document/10589729',
    liveLabel: 'IEEE Xplore Publication',
    image: getAssetPath('/placeholder.svg'),
    featured: true,
  },
  {
    id: 'credit-default-risk',
    title: 'Credit Card Default Risk Prediction',
    description: 'PGP-DSBA capstone: supervised learning models predicting credit card customer default risk.',
    icon: BarChart3,
    category: 'ML',
    sortRank: 60,
    tech: ['Naive Bayes', 'LDA', 'AdaBoost', 'Gradient Boosting', 'KNN'],
    fullDescription: 'Developed a supervised learning model to predict credit card default probability from account, purchase, and delinquency data, with extensive EDA and model comparison.',
    features: [
      'EDA identifying high-risk purchase categories',
      'Five models compared: Naive Bayes, LDA, AdaBoost, Gradient Boosting, KNN',
      'Hyperparameter tuning via Grid Search CV',
    ],
    challenges: 'Balancing recall and precision to catch defaults without over-flagging low-risk customers.',
    solution: 'LDA emerged as the top-performing model after tuning, informing dynamic interest-rate and risk-based penalty recommendations.',
    image: getAssetPath('/placeholder.svg'),
  },
  {
    id: 'brain-stroke-detection',
    title: 'Early Detection of Brain Stroke via MRI',
    description: 'AI-powered stroke detection system using classical computer vision and SVM classification. Published in IRJET.',
    icon: Zap,
    category: 'ML',
    sortRank: 70,
    tech: ['Gabor Filters', 'Fuzzy C-Means', 'GLCM', 'SVM'],
    fullDescription: 'Developed an AI-powered stroke detection system using Gabor filters and adaptive histogram equalization for preprocessing, fuzzy c-means clustering for segmentation, and GLCM feature extraction feeding a multiclass SVM classifier.',
    features: [
      'Gabor filter and AHE-based MRI preprocessing',
      'Fuzzy C-Means clustering for segmentation',
      'GLCM feature extraction and multiclass SVM classification',
    ],
    challenges: 'Early stroke detection from MRI requires precise segmentation despite noisy imaging.',
    solution: 'Combined classical image processing with a multiclass SVM to reach 90%+ classification accuracy.',
    liveUrl: 'https://www.irjet.net/archives/V7/i9/IRJET-V7I9400.pdf',
    liveLabel: 'IRJET Publication',
    image: getAssetPath('/placeholder.svg'),
  },
];

export const projects = [...projectItems].sort(
  (a, b) => (a.sortRank ?? 999) - (b.sortRank ?? 999),
);

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'Data Engineering',
  'AI',
  'Distributed Systems',
  'ML',
];
