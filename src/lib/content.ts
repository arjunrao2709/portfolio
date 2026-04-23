import type { Project, Brand, PhilosophyItem, LeadershipStat, CaseStudy } from '@/types'

export const projects: Project[] = [
  {
    id: 'stylepass',
    title: 'StylePass.ai',
    role: 'Head of Design',
    year: '2023–24',
    tagline: 'AI-powered personal styling at scale.',
    description:
      'Built the design function from scratch — from brand identity to AI-powered styling UX and a scalable design system serving thousands of users.',
    accent: '#F59E0B',
    tags: ['AI/ML Product', 'Consumer', 'Design System'],
  },
  {
    id: 'theklub',
    title: 'theKlub.world',
    role: 'Design Lead',
    year: '2022–23',
    tagline: 'Community-first social commerce.',
    description:
      'Led end-to-end UX for a social commerce platform connecting creators and communities across Southeast Asia. Scaled design 0→1 and established the team\'s first design critique rituals.',
    accent: '#F97316',
    tags: ['Social', 'Commerce', 'Mobile'],
  },
  {
    id: 'ula',
    title: 'Ula',
    role: 'Senior Product Designer',
    year: '2021–22',
    tagline: 'Digitising Indonesia\'s informal retail.',
    description:
      'Redesigned the B2B purchasing experience for informal retailers in Indonesia, reducing friction across a complex supply chain and driving measurable increase in order completion rates.',
    accent: '#FCD34D',
    tags: ['Emerging Markets', 'B2B', 'Scale'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'stylepass',
    title: 'StylePass.ai',
    role: 'Head of Design',
    year: '2023–24',
    accent: '#F59E0B',
    tags: ['AI/ML Product', 'Consumer', 'Design System'],
    overview:
      'StylePass.ai is a B2B SaaS product that embeds an AI-powered virtual try-on widget into boutique fashion brand storefronts. The B2B customer is the boutique brand — the end-user is their shopper: a 25–40 year old discovering an independent label, often for the first time.',
    challenge:
      'When I joined, the company was onboarding its very first customer. The v1 experience was fundamentally broken across the board — no clarity, no trust, no delight. Only 6% of shoppers were even engaging with the try-on feature, and the eventual add-to-cart rate sat below 0.5%. The core design question: how do you build enough confidence for a stranger to upload a photo of themselves, trust an AI to dress them, and then commit to spending money with a brand they\'ve never heard of?',
    sections: [
      {
        label: 'Research & Discovery',
        heading: 'What online shoppers actually trust',
        body: [
          'I ran user research with online shoppers and conducted a competitive analysis across Glance, Zara, GenLook.ai, and others operating in the virtual try-on space.',
          'The research painted a clear picture of how fashion shoppers behave. Purchasing decisions are rarely solo — people delay buys to consult friends, cross-reference Pinterest for aesthetic inspiration, and lean heavily on detailed product descriptions. Nykaa and Myntra had set the trust benchmark: shoppers explicitly preferred them over Amazon because of reliable returns and richer product information including shade names, necklines, and fit notes.',
          'On virtual try-ons specifically, the skepticism was pointed. The primary fear wasn\'t privacy in the abstract — it was dimensional accuracy. Shoppers worried the AI wouldn\'t represent their actual body structure and fit correctly. A try-on that made them look wrong was worse than no try-on at all.',
          'The research also surfaced something more interesting: these shoppers weren\'t just shopping to fill a wardrobe gap. They were shopping for a version of themselves — a "Pinteresty" look, an identity, a feeling. The aspiration was the product.',
        ],
      },
      {
        label: 'The Insight',
        heading: 'Confidence has two engines',
        body: [
          'The research pointed to two levers that moved a shopper from hesitation to action.',
          'The first was safety. Uploading a full-body photo to an unknown brand is a real ask — it cuts against years of conditioning to protect personal data online. This had to be addressed directly, as a first-class design element, not buried in fine print.',
          'The second was aspiration. The try-on couldn\'t present itself as a mere utility — "does this fit?" — because that framing primes the user to evaluate risk rather than feel excitement. It needed to tap into the aspirational dimension that was already driving their shopping: becoming a version of themselves they actually want to be.',
          'These two levers — feeling safe and feeling inspired — became the design brief.',
        ],
      },
      {
        label: 'Design Response',
        heading: 'Rebuilding the entire conversion journey',
        body: [
          'I rebuilt the try-on flow end-to-end, starting with copy. The entry point became "See it on you" — active, personal, forward-looking — rather than the transactional framing that preceded it. Privacy assurance ("Your photos stay private. Always.") was surfaced as a prominent, first-screen element rather than a legal footnote. Social proof ("3 people tried this recently") was added to normalise the behaviour and reduce the sense of being alone in taking a risk.',
          'The biggest new surface was the Stylebook — a post-try-on feature that showed the same garment styled for different occasions: Your Vibe, Date Night, Office Ready. This transformed the try-on from a functional question about fit into an aspirational tool for imagining yourself in different contexts. It also increased the time shoppers spent engaged with the product, which correlated with higher conversion.',
          'I integrated product analytics across every step of the funnel — not as an afterthought but as a first decision. This became the feedback loop that let us move quickly and know what was working.',
          'Longer-term, based on the dimensional accuracy concern surfaced in research, I scoped and proposed a customisable avatar feature — similar to Bitmoji — that would allow shoppers to adjust body parameters to better represent themselves. This addressed the deepest layer of skepticism directly.',
        ],
      },
    ],
    outcome: {
      summary:
        'Within two months of the redesigned experience going live, the numbers told a clear story.',
      metrics: [
        { value: '30%', label: 'Try-on engagement (up from 6%)' },
        { value: '8%', label: 'Add-to-cart conversion (up from <0.5%)' },
        { value: '2mo', label: 'Time to results' },
        { value: '16×', label: 'Increase in ATC conversion' },
      ],
    },
    images: [],
  },
  {
    id: 'theklub',
    title: 'theKlub.world',
    role: 'Design Lead',
    year: '2022–23',
    accent: '#F97316',
    tags: ['Social', 'Commerce', 'Mobile'],
    overview: '',
    challenge: '',
    sections: [],
    outcome: {
      summary: '',
      metrics: [],
    },
    images: [],
  },
  {
    id: 'ula',
    title: 'Ula',
    role: 'Senior Product Designer',
    year: '2021–22',
    accent: '#FCD34D',
    tags: ['Emerging Markets', 'B2B', 'Scale'],
    overview: '',
    challenge: '',
    sections: [],
    outcome: {
      summary: '',
      metrics: [],
    },
    images: [],
  },
]

export const brands: Brand[] = [
  { name: 'VMware' },
  { name: 'Deloitte' },
  { name: 'Ula' },
  { name: 'Smarthub.ai' },
  { name: 'theKlub.world' },
  { name: 'StylePass.ai' },
]

export const philosophyItems: PhilosophyItem[] = [
  {
    number: '01',
    headline: 'Design is a leadership act',
    body: 'Great design decisions require conviction. The best outcomes come when designers hold a strong point of view and advocate for the user at every table — not just in the design review.',
  },
  {
    number: '02',
    headline: 'Systems before surfaces',
    body: 'Before pixels, I think in systems — mental models, interaction patterns, and team structures that scale. The UI is the output, never the starting point.',
  },
  {
    number: '03',
    headline: 'Ambiguity is the job',
    body: 'Product design lives at the intersection of what\'s wanted, what\'s buildable, and what\'s viable. I thrive in that tension and turn uncertainty into clear direction.',
  },
  {
    number: '04',
    headline: 'Teams ship great design',
    body: 'The best work of my career came from teams that trusted each other. Building that trust — through feedback culture, clarity, and genuine investment in people — is what I do.',
  },
]

export const leadershipStats: LeadershipStat[] = [
  { value: '10+', label: 'Years in Design' },
  { value: '5+', label: 'Teams Led' },
  { value: '30+', label: 'Designers Mentored' },
]

export const leadershipHighlights = [
  'Scaled 0→1 design teams at StylePass.ai and theKlub.world',
  'Established design critique rituals, feedback frameworks, and career ladders',
  '1:1 mentoring for 30+ junior and mid-level designers across 4 companies',
]

export const leadershipQuote = {
  text: "Design leadership isn't about making the best designs. It's about creating the environment where great design becomes inevitable.",
  attribution: 'Arjun Rao',
}
