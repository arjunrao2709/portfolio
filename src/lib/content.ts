import type { Project, Brand, PhilosophyItem, LeadershipStat } from '@/types'

export const projects: Project[] = [
  {
    id: 'stylepass',
    title: 'StylePass.ai',
    role: 'Head of Design',
    year: '2023–24',
    tagline: 'AI-powered personal styling at scale.',
    description:
      'Built the design function from scratch — from brand identity to AI-powered styling UX and a scalable design system serving thousands of users.',
    accent: '#7C3AED',
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
    accent: '#F59E0B',
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
    accent: '#A855F7',
    tags: ['Emerging Markets', 'B2B', 'Scale'],
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
