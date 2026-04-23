import FadeUp from '@/components/motion/FadeUp'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/content'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="bg-bg-dark border-t border-white/8 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-4">
              Selected Work
            </p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
              Featured Projects
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          <FadeUp className="md:col-span-2 bg-bg-dark">
            <ProjectCard project={featured} featured />
          </FadeUp>
          <div className="flex flex-col gap-px bg-white/8">
            {rest.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.1} className="bg-bg-dark flex-1">
                <ProjectCard project={project} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
