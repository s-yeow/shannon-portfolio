import type { Link, Project } from '@/data/projects';
import { ProjectCover } from './ProjectCover';
import { ScreenCarousel } from './ScreenCarousel';

function ExternalLink({ link, className }: { link: Link; className: string }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ProjectCard({ project, order }: { project: Project; order: number }) {
  const [primary] = project.links;
  // Alternate which side the cover sits on; every project gets the same footprint.
  const flipped = order % 2 === 1;

  return (
    <article
      className="project-card card-enter"
      style={{ animationDelay: `${Math.min(order, 4) * 70}ms` }}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Catalog rule: number · category · year */}
      <div className="label flex items-baseline justify-between gap-4 border-t border-ink pt-3 pb-5 text-[0.625rem]">
        <span className="flex gap-3">
          <span className="shrink-0 text-cobalt">No. {project.number}</span>
          <span className="text-muted">{project.category}</span>
        </span>
        {project.year && <span className="shrink-0 text-muted">{project.year}</span>}
      </div>

      <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-center">
        <div className={`relative aspect-[16/10] overflow-hidden bg-paper-deep lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}>
          {project.gallery ? (
            <ScreenCarousel title={project.title} screens={project.gallery} />
          ) : (
            <a href={primary.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="absolute inset-0">
              <div className="cover-art absolute inset-0">
                <ProjectCover project={project} />
              </div>
              <span className="cover-arrow absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-paper text-lg text-ink">
                ↗
              </span>
            </a>
          )}
        </div>

        <div className={`lg:col-span-5 ${flipped ? 'lg:order-1' : ''}`}>
          <h3
            id={`${project.id}-title`}
            className="card-title font-serif text-[2rem] leading-[1.02] tracking-[-0.01em] text-balance sm:text-[2.75rem]"
          >
            <a href={primary.href} target="_blank" rel="noopener noreferrer" className="focus-visible:text-cobalt">
              {project.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </h3>
          <p className="mt-4 max-w-[48ch] text-[0.975rem] leading-relaxed text-muted text-pretty">{project.description}</p>
          {project.highlight && (
            <div className="mt-5 max-w-[48ch] border-l-2 border-cobalt pl-4">
              <p className="label text-[0.625rem] text-cobalt">{project.highlight.kind}</p>
              <p className="mt-1.5 font-serif text-xl leading-snug">{project.highlight.text}</p>
              {project.highlight.links && (
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {project.highlight.links.map(link => (
                    <li key={link.href}>
                      <ExternalLink link={link} className="link-underline text-[0.8125rem] text-muted hover:text-cobalt" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map(link => (
              <li key={link.href}>
                <ExternalLink link={link} className="link-underline inline-flex items-center gap-1.5 pb-0.5 text-sm font-medium hover:text-cobalt" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
