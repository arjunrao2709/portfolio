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
