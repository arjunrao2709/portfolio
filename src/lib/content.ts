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
      'When I joined, the company was onboarding its very first customer. The v1 experience was fundamentally broken across the board. Only 6% of shoppers were engaging with the try-on at all, and the eventual add-to-cart rate sat below 0.5%. Looking at the screens, the problems were immediate: a cold command ("Upload a front facing photo"), the user\'s own photo displayed side-by-side with a model — awkward and exposing — and a processing state that showed a 1:55 countdown timer while a generic grey sweatsuit placeholder filled the screen. Nearly two minutes of waiting, watching an irrelevant outfit. Most people left. The core design question: how do you build enough confidence for a stranger to upload a photo of themselves, trust an AI to dress them, and commit to spending money with a brand they\'ve never heard of?',
    sections: [
      {
        label: 'Research & Discovery',
        heading: 'What online shoppers actually trust',
        body: [
          'I ran user research with online shoppers and conducted a competitive analysis across Glance, Zara, GenLook.ai, and others in the virtual try-on space.',
          'The research painted a clear picture of how fashion shoppers behave. Purchasing decisions are rarely solo — people delay buys to consult friends, cross-reference Pinterest for aesthetic inspiration, and lean heavily on detailed product descriptions. Nykaa and Myntra had set the trust benchmark: shoppers preferred them over Amazon specifically because of reliable returns and richer product information — shade names, necklines, fit notes.',
          'On virtual try-ons, the skepticism was pointed. The primary fear wasn\'t privacy in the abstract — it was dimensional accuracy. Shoppers worried the AI wouldn\'t represent their actual body structure and fit correctly. A try-on that made them look wrong was worse than no try-on at all.',
          'The research also surfaced something more interesting: these shoppers weren\'t just filling a wardrobe gap. They were shopping for a version of themselves — a "Pinteresty" look, an identity, a feeling. The aspiration was the product.',
        ],
      },
      {
        label: 'The Insight',
        heading: 'Confidence has two engines',
        body: [
          'The research pointed to two levers that moved a shopper from hesitation to action.',
          'The first was safety. Uploading a full-body photo to an unknown brand cuts against years of conditioning to protect personal data. The v1 addressed this with a single line of small print: "Your photos are private and deleted after 30 days." It was true — but it was invisible. This needed to be a first-class design element, not a footnote.',
          'The second was aspiration. The v1 framed the try-on as a utility — "does this fit?" — which primed users to evaluate risk rather than feel excitement. The research made clear that fashion shopping is fundamentally aspirational: it\'s about who you could be. The try-on needed to speak to that.',
          'These two levers — feeling safe and feeling inspired — became the design brief.',
        ],
      },
      {
        label: 'Design Response',
        heading: 'Rebuilding the entire conversion journey',
        body: [
          'I rebuilt the flow end-to-end, starting with copy. "Upload a front facing photo" became "See it on you" — active, personal, forward-looking. Privacy assurance was rewritten to "Your photos stay private. Always." and moved to a prominent position on the first screen, not buried below the fold. The side-by-side showing the user\'s photo next to a model was removed — instead, the shopper selects a photo and moves straight to confirmation, keeping the focus on the garment.',
          'Social proof was refined: "3 people tried this recently" replaced the aggressive "🔥 21 people tried this in the past 1 hour", which felt like a pushy sales tactic rather than genuine reassurance.',
          'The biggest new surface was the Stylebook — a post-try-on feature showing the same garment styled for different occasions: Your Vibe, Date Night, Office Ready. This transformed the try-on from a functional question about fit into an aspirational tool for imagining yourself in different contexts. Shoppers spent more time engaged, and that correlated directly with higher conversion.',
          'I integrated product analytics across every funnel step as a first decision, not an afterthought. This became the feedback loop that let us move quickly and measure what was actually working.',
          'Longer-term, I scoped and proposed a customisable avatar feature — similar to Bitmoji — that would let shoppers adjust body parameters to better represent themselves, addressing the dimensional accuracy concern at its root.',
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
    images: [
      { src: '/projects/stylepass/before-1.jpg', caption: 'before:Upload screen' },
      { src: '/projects/stylepass/before-2.jpg', caption: 'before:Processing — 1:55 wait' },
      { src: '/projects/stylepass/before-3.jpg', caption: 'before:Result screen' },
      { src: '/projects/stylepass/after-1.jpg', caption: 'after:See it on you' },
      { src: '/projects/stylepass/after-2.jpg', caption: 'after:Photo confirmation' },
      { src: '/projects/stylepass/after-3.jpg', caption: 'after:Try-on result' },
      { src: '/projects/stylepass/after-4.jpg', caption: 'after:Stylebook' },
    ],
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
