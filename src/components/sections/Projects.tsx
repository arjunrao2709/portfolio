import FadeUp from '@/components/motion/FadeUp'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/content'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              <h2 className="text-xs text-ink-3 tracking-widest uppercase">Selected Work</h2>
            </div>
            <span className="text-xs text-ink-3">{projects.length} projects</span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Featured — full width */}
          <FadeUp className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </FadeUp>

          {/* Secondary cards */}
          {rest.map((project, i) => (
            <FadeUp key={project.id} delay={(i + 1) * 0.08}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
