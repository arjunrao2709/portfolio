import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/lib/content'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = caseStudies.find((c) => c.id === params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} — Arjun Rao`,
    description: cs.overview,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.id === params.slug)
  if (!cs || !cs.overview) notFound()

  const beforeImages = cs.images.filter((img) => img.caption?.startsWith('before:'))
  const afterImages = cs.images.filter((img) => img.caption?.startsWith('after:'))

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 h-14 flex items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 md:px-10 pt-24 pb-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs text-accent-primary font-medium">{cs.role}</span>
            <span className="text-xs text-text-muted">{cs.year}</span>
            {cs.tags.map((tag) => (
              <span key={tag} className="text-xs text-text-muted/50 border border-white/[0.07] px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            {cs.title}
          </h1>

          <p className="text-base text-text-muted leading-relaxed">{cs.overview}</p>
        </div>

        {/* Challenge */}
        <section className="mb-14">
          <h2 className="text-xs text-accent-primary font-medium mb-4">The challenge</h2>
          <p className="text-sm text-white/80 leading-relaxed">{cs.challenge}</p>
        </section>

        {/* Before screens */}
        {beforeImages.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xs text-text-muted font-medium mb-5">Before</h2>
            <div className="grid grid-cols-3 gap-3">
              {beforeImages.map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden border border-white/[0.06] aspect-[9/16] bg-bg-card">
                  <Image src={img.src} alt={img.caption?.replace('before:', '') ?? ''} fill className="object-cover object-top" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Metrics */}
        {cs.outcome.metrics.length > 0 && (
          <section className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border border-white/[0.06] bg-bg-card">
            {cs.outcome.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-semibold text-accent-primary mb-0.5">{m.value}</div>
                <div className="text-xs text-text-muted leading-snug">{m.label}</div>
              </div>
            ))}
          </section>
        )}

        {/* Content sections */}
        {cs.sections.map((section, i) => (
          <section key={i} className="mb-14">
            <h2 className="text-xs text-accent-primary font-medium mb-4">{section.label}</h2>
            <h3 className="text-xl font-semibold text-white mb-5 leading-snug">{section.heading}</h3>
            <div className="space-y-4">
              {section.body.map((para, j) => (
                <p key={j} className="text-sm text-text-muted leading-relaxed">{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* After screens */}
        {afterImages.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xs text-text-muted font-medium mb-5">After</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {afterImages.map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden border border-white/[0.06] aspect-[9/16] bg-bg-card">
                  <Image src={img.src} alt={img.caption?.replace('after:', '') ?? ''} fill className="object-cover object-top" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcome */}
        {cs.outcome.summary && (
          <section className="mb-14 border-l border-accent-primary pl-5">
            <h2 className="text-xs text-accent-primary font-medium mb-3">Outcome</h2>
            <p className="text-sm text-white/80 leading-relaxed">{cs.outcome.summary}</p>
          </section>
        )}

        <div className="pt-10 border-t border-white/[0.06]">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to all work
          </Link>
        </div>
      </main>
    </div>
  )
}
