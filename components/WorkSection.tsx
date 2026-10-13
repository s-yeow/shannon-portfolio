import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionLabel } from './SectionLabel';

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-[1440px] px-5 pt-24 pb-28 sm:px-8 sm:pt-32 lg:px-14 lg:pb-40">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionLabel number="01" name="Work" />
          <h2 id="work-heading" className="mt-6 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Selected <em>projects.</em>
          </h2>
        </div>
        <p className="max-w-sm self-end text-lg leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          A collection of things I&rsquo;ve built, designed, and researched.
        </p>
      </div>

      <div className="mt-16 space-y-20 lg:space-y-28">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} order={index} />
        ))}
      </div>
    </section>
  );
}
