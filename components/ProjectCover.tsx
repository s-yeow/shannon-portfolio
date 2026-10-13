import Image from 'next/image';
import type { Project } from '@/data/projects';

// Real screenshots only. Projects without one get a neutral placeholder —
// add a file to /public/projects and set `image` in data/projects.ts.
export function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover"
        style={{ objectPosition: project.image.position ?? 'center' }}
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-muted/50 bg-paper-deep">
      <span className="max-w-[24ch] px-6 text-center font-serif text-2xl leading-tight text-balance italic text-ink/70 sm:text-3xl">{project.title}</span>
      <span className="label text-[0.625rem] text-muted">Screenshot coming soon</span>
    </div>
  );
}
