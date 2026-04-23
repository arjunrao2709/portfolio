import FadeUp from '@/components/motion/FadeUp'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/content'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="bg-bg-dark border-t border-white/[0.06] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-2xl font-semibold text-white">Selected work</h2>
            <span className="text-xs text-text-muted">{projects.length} projects</span>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-px bg-white/[0.06]">
          <FadeUp>
            <ProjectCard project={featured} featured />
          </FadeUp>
          {rest.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
