import FadeUp from '@/components/motion/FadeUp'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/content'

export default function Projects() {
  return (
    <section id="projects" className="bg-white border-t border-stone-200 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-sm text-text-muted mb-8">Product Design</p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} featured={i === 0} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
