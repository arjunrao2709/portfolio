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
  const otherImages = cs.images.filter(
    (img) => !img.caption?.startsWith('before:') && !img.caption?.startsWith('after:')
  )

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-300 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-24">
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{ color: cs.accent, borderColor: `${cs.accent}40`, backgroundColor: `${cs.accent}15` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-text-primary mb-4 leading-tight">
            {cs.title}
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-text-muted">{cs.role}</span>
            <span className="w-1 h-1 rounded-full bg-text-muted/40" />
            <span className="font-body text-text-muted">{cs.year}</span>
          </div>

          <div className="h-[3px] w-16 rounded-full mb-12" style={{ backgroundColor: cs.accent }} />

          <p className="font-body text-xl text-text-muted leading-relaxed">{cs.overview}</p>
        </div>

        {/* Challenge */}
        <section className="mb-20">
          <span
            className="font-body text-xs font-semibold uppercase tracking-[0.3em] mb-4 block"
            style={{ color: cs.accent }}
          >
            The Challenge
          </span>
          <p className="font-body text-lg text-text-primary leading-relaxed">{cs.challenge}</p>
        </section>

        {/* Before screens */}
        {beforeImages.length > 0 && (
          <section className="mb-20">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-text-muted mb-6">
              Before — v1
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {beforeImages.map((img, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-bg-card aspect-[9/16]">
                  <Image
                    src={img.src}
                    alt={img.caption?.replace('before:', '') ?? ''}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Metrics */}
        {cs.outcome.metrics.length > 0 && (
          <section className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-white/5 bg-bg-card">
            {cs.outcome.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span
                  className="font-display font-extrabold text-4xl md:text-5xl"
                  style={{ color: cs.accent }}
                >
                  {m.value}
                </span>
                <span className="font-body text-xs text-text-muted leading-snug">{m.label}</span>
              </div>
            ))}
          </section>
        )}

        {/* Content sections */}
        {cs.sections.map((section, i) => (
          <section key={i} className="mb-20">
            <span
              className="font-body text-xs font-semibold uppercase tracking-[0.3em] mb-4 block"
              style={{ color: cs.accent }}
            >
              {section.label}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-8 leading-tight">
              {section.heading}
            </h2>
            <div className="space-y-5">
              {section.body.map((para, j) => (
                <p key={j} className="font-body text-lg text-text-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* After screens */}
        {afterImages.length > 0 && (
          <section className="mb-20">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-text-muted mb-2">
              After — Redesign
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-8">
              The redesigned experience
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {afterImages.map((img, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-bg-card aspect-[9/16]">
                  <Image
                    src={img.src}
                    alt={img.caption?.replace('after:', '') ?? ''}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other images */}
        {otherImages.length > 0 && (
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherImages.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-bg-card aspect-video">
                <Image src={img.src} alt={img.caption ?? ''} fill className="object-cover" />
                {img.caption && (
                  <p className="absolute bottom-4 left-4 font-body text-xs text-white/60">{img.caption}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Outcome */}
        {cs.outcome.summary && (
          <section className="mb-20 border-l-4 pl-8 py-2" style={{ borderColor: cs.accent }}>
            <span
              className="font-body text-xs font-semibold uppercase tracking-[0.3em] mb-4 block"
              style={{ color: cs.accent }}
            >
              Outcome
            </span>
            <p className="font-body text-lg text-text-primary leading-relaxed">{cs.outcome.summary}</p>
          </section>
        )}

        {/* Footer nav */}
        <div className="pt-12 border-t border-white/5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-300 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all work
          </Link>
        </div>
      </main>
    </div>
  )
}
