import FadeUp from '@/components/motion/FadeUp'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/content'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="bg-bg-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeUp>
          <div className="mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-4">
              Selected Work
            </p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-text-primary">
              Featured Projects
            </h2>
          </div>
        </FadeUp>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Featured card — 2 columns */}
          <FadeUp className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </FadeUp>

          {/* Stacked smaller cards */}
          <div className="flex flex-col gap-4 md:gap-6">
            {rest.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
