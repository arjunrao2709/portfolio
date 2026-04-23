export interface Project {
  id: string
  title: string
  role: string
  year: string
  tagline: string
  description: string
  accent: string
  tags: string[]
}

export interface CaseStudySection {
  label: string
  heading: string
  body: string[]
}

export interface CaseStudyImage {
  src: string
  caption?: string
}

export interface CaseStudy {
  id: string
  title: string
  role: string
  year: string
  accent: string
  tags: string[]
  overview: string
  challenge: string
  sections: CaseStudySection[]
  outcome: {
    summary: string
    metrics: { value: string; label: string }[]
  }
  images: CaseStudyImage[]
}

export interface Brand {
  name: string
}

export interface PhilosophyItem {
  number: string
  headline: string
  body: string
}

export interface LeadershipStat {
  value: string
  label: string
}
