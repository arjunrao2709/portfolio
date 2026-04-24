import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/lib/content'
import IPhoneFrame from '@/components/ui/IPhoneFrame'
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
    <div className="min-h-screen bg-canvas text-ink">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
          <span className="font-serif text-sm font-bold text-ink">Arjun Rao</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 md:px-10 pt-28 pb-24">

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-accent tracking-wide">{cs.role}</span>
            <span className="text-xs text-ink-3">{cs.year}</span>
            {cs.tags.map((tag) => (
              <span key={tag} className="text-xs text-ink-3 border border-border px-2.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
            {cs.title}
          </h1>
          <p className="text-base text-ink-2 leading-relaxed">{cs.overview}</p>
        </div>

        {/* My Role */}
        {cs.myRole && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-4 h-px bg-accent" />
              <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">My Role</h2>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed">{cs.myRole}</p>
          </section>
        )}

        {/* Challenge */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-4 h-px bg-accent" />
            <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">The Challenge</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">{cs.challenge}</p>
        </section>

        {/* Before screens */}
        {beforeImages.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-4 h-px bg-accent" />
              <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">Before</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {beforeImages.map((img, i) => (
                <IPhoneFrame key={i}>
                  <Image
                    src={img.src}
                    alt={img.caption?.replace('before:', '') ?? ''}
                    fill
                    className="object-cover object-top"
                  />
                </IPhoneFrame>
              ))}
            </div>
          </section>
        )}

        {/* Metrics */}
        {cs.outcome.metrics.length > 0 && (
          <section className="mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-warm border border-border">
              {cs.outcome.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-accent mb-1">{m.value}</div>
                  <div className="text-xs text-ink-3 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Content sections */}
        {cs.sections.map((section, i) => (
          <section key={i} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-4 h-px bg-accent" />
              <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">{section.label}</h2>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-5 leading-snug">{section.heading}</h3>
            <div className="space-y-4">
              {section.body.map((para, j) => (
                <p key={j} className="text-sm text-ink-2 leading-relaxed">{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* After screens */}
        {afterImages.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-4 h-px bg-accent" />
              <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">After</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {afterImages.map((img, i) => (
                <IPhoneFrame key={i}>
                  <Image
                    src={img.src}
                    alt={img.caption?.replace('after:', '') ?? ''}
                    fill
                    className="object-cover object-top"
                  />
                </IPhoneFrame>
              ))}
            </div>
          </section>
        )}

        {/* Video embed */}
        {cs.videoUrl && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-4 h-px bg-accent" />
              <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">In Action</h2>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={cs.videoUrl}
                className="absolute inset-0 w-full h-full border border-border"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Outcome */}
        {cs.outcome.summary && (
          <section className="mb-14 border-l-2 border-accent pl-6">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-xs font-semibold text-accent tracking-widest uppercase">Outcome</h2>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed">{cs.outcome.summary}</p>
          </section>
        )}

        {/* Live site link */}
        {cs.liveUrl && (
          <section className="mb-14">
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-accent text-white px-6 py-4 hover:bg-accent-dark transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span className="text-sm font-semibold">{cs.liveUrlLabel ?? 'Check out the work in action'}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </section>
        )}

        <div className="pt-10 border-t border-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all work
          </Link>
        </div>
      </main>
    </div>
  )
}
