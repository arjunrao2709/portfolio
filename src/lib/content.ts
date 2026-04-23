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
    role: 'Head of Product',
    year: '2023–24',
    tagline: 'Your new home for active travel.',
    description:
      'Built a sports & wellness travel platform from zero — through two research-driven pivots — to £30k/month. Led product, design, social positioning, and engineering.',
    accent: '#FBBF24',
    tags: ['Travel', 'Sports & Wellness', '0→1'],
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
    role: 'Head of Product',
    year: '2023–24',
    accent: '#FBBF24',
    tags: ['Travel', 'Sports & Wellness', '0→1'],
    overview:
      'theKlub.world is a sports and wellness travel platform connecting fitness-minded travellers with ambassador-led, small-batch trips — curated experiences built around shared athletic pursuits. I joined with nothing: no product, no direction, no validated market. I left with a platform doing £30k a month.',
    challenge:
      'The founder came with a belief, not a brief. He wanted to do something for boutique hotels — but what exactly, and for whom, was entirely open. My first job wasn\'t to design a product. It was to find the right problem worth solving.',
    sections: [
      {
        label: 'Discovery',
        heading: 'Finding the right problem before building the wrong product',
        body: [
          'We started where the founder\'s instinct pointed: boutique hotels. These are properties with personality, often better suited to active travellers than large chains — but they had no obvious distribution problem we could solve better than what already existed.',
          'Talking to travellers revealed something more interesting. Athletes and fitness-minded people face a consistent, underserved friction when travelling for sport. Large chain hotels aren\'t built for them — training schedules, equipment storage, dietary needs, group coordination — none of it fits neatly into the standard hotel experience. Boutique properties were more flexible, but finding the right one was hard and trusting it was harder.',
          'That was pivot one: away from a general boutique hotel platform, toward a purpose-built sports travel product.',
        ],
      },
      {
        label: 'The Pivot That Defined the Product',
        heading: 'From sports travel to community-led experiences',
        body: [
          'Running the sports travel platform revealed a subtler problem beneath the logistics one. The deeper friction wasn\'t just accommodation — it was isolation. People who wanted to stay fit while travelling struggled to find others with the same drive and the same sport. Travelling for fitness is one thing. Finding a community that makes staying active feel effortless and exciting is something else entirely.',
          'At the same time, we were watching a clear cultural trend: micro-influencers and sports coaches building deeply engaged audiences around specific sports — padel, trail running, open-water swimming, yoga retreats. These creators had trust and community but no infrastructure for organising trips.',
          'In August, we made pivot two. We repositioned theKlub as a platform for ambassadors — coaches and micro-influencers — to organise and sell small-batch sports trips to their audiences. We became the infrastructure layer between creator and community, handling bookings, payments, logistics, and the hotel layer underneath.',
          'The proposition crystallised: "Your New Home for Active Travel." Not a marketplace. A curated, community-first experience built around people who coach and lead — and the followers who trust them enough to travel with them.',
        ],
      },
      {
        label: 'Product & Design',
        heading: 'Building the platform from zero',
        body: [
          'I led product end-to-end alongside a visual designer. My scope was unusually wide: product strategy, conversion journey, social media positioning, and managing the engineering team. The design work was inseparable from the business decisions.',
          'The core surfaces we built were the trip discovery and booking flow for travellers, and the ambassador portal for coaches and influencers to create, manage, and sell their trips. Conversion was the constant north star — every design decision was evaluated against whether it moved someone closer to booking or closer to creating a trip.',
          'Social positioning was a significant workstream in itself. The platform needed to speak to two distinct audiences — athletes who travel, and creators who lead — with a single coherent brand identity. The "Klub" framing was deliberate: exclusive-feeling but welcoming, athletic but not intimidating.',
        ],
      },
    ],
    outcome: {
      summary:
        'By the time I left, theKlub was generating £30,000 a month in consistent revenue — built from nothing, through two pivots, in under a year.',
      metrics: [
        { value: '£30k', label: 'Monthly revenue at exit' },
        { value: '0→1', label: 'Full product build' },
        { value: '2', label: 'Research-driven pivots' },
        { value: '1', label: 'Year to profitability' },
      ],
    },
    images: [
      { src: '/projects/theklub/screen-1.jpg', caption: 'after:Homepage' },
      { src: '/projects/theklub/screen-2.jpg', caption: 'after:Trip discovery' },
      { src: '/projects/theklub/screen-3.jpg', caption: 'after:Trip detail' },
      { src: '/projects/theklub/screen-4.jpg', caption: 'after:Ambassador portal' },
    ],
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

export const publications = [
  {
    title: 'Enabling Rural Women in India to Speculate Futures Through Games and Theatre: A Participatory Approach',
    venue: 'Interactivity, Game Creation, Design, Learning, and Innovation',
    conference: 'ArtsIT 2019 · DLI 2019',
    publisher: 'Springer',
    year: '2019',
    abstract:
      'Reports early findings from engaging in participatory and speculative design methods with rural women in Bihar, India. Outlines a contextualized workshop that includes participants as equal contributors to the design of their futures — arguing that in cultures with entrenched power structures, participatory design can give voice to the marginalised and uncover the complexities needed to design sustainable interventions.',
    href: 'https://link.springer.com/chapter/10.1007/978-3-030-53294-9_47',
  },
]
