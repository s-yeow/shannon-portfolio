import { leadership, professional, recognition, resumeUrl, skills } from '@/data/experience';
import { SectionLabel } from './SectionLabel';

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="label border-b border-ink pb-3 text-ink">{children}</h3>;
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mx-auto max-w-[1440px] px-5 pb-28 sm:px-8 lg:px-14 lg:pb-40">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionLabel number="02" name="Experience" />
          <h2 id="experience-heading" className="mt-6 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Where I&rsquo;ve <em>worked.</em>
          </h2>
        </div>
        <div className="self-end lg:col-span-4 lg:col-start-9">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta inline-flex items-center gap-3 border-b border-ink pb-1 text-base font-medium transition-colors hover:border-cobalt hover:text-cobalt"
          >
            View full résumé <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="mt-16">
        <SubHeading>Professional</SubHeading>
        <ol>
          {professional.map(item => (
            <li key={`${item.org}-${item.dates}`} className="grid gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-12">
              <p className="label pt-1.5 text-[0.625rem] text-muted lg:col-span-2">{item.dates}</p>
              <div className="lg:col-span-4">
                <p className="font-serif text-[1.75rem] leading-tight">{item.org}</p>
                <p className="mt-1 text-sm text-cobalt">{item.role}</p>
              </div>
              <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted lg:col-span-6">
                {item.points.map(point => (
                  <li key={point} className="relative pl-5">
                    <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-ink/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SubHeading>Leadership</SubHeading>
          <ul>
            {leadership.map(item => (
              <li key={item.org} className="border-b border-rule py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-serif text-xl leading-snug">{item.org}</p>
                  <p className="label shrink-0 text-[0.625rem] text-muted">{item.dates}</p>
                </div>
                <p className="mt-1 text-sm text-cobalt">{item.role}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <SubHeading>Recognition</SubHeading>
          <ul>
            {recognition.map(item => (
              <li key={item.title} className="flex items-baseline justify-between gap-4 border-b border-rule py-4">
                <div>
                  <p className="leading-snug">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                </div>
                <p className="label shrink-0 text-[0.625rem] text-muted">{item.year}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <SubHeading>Skills</SubHeading>
            <dl>
              {skills.map(item => (
                <div key={item.label} className="border-b border-rule py-4">
                  <dt className="label text-[0.625rem] text-cobalt">{item.label}</dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
