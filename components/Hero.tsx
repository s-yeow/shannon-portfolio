import { resumeUrl } from '@/data/experience';
import { LocalTime } from './LocalTime';

function Stamp() {
  return (
    <svg viewBox="0 0 120 120" className="hero-stamp size-28 text-ink lg:size-36" aria-hidden="true">
      <defs>
        <path id="stamp-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <text className="svg-mono" fontSize="7.4" fill="currentColor">
        <textPath href="#stamp-circle" textLength="285">
          COMPUTER SCIENCE · ENVIRONMENTAL STUDIES · ART HISTORY ·
        </textPath>
      </text>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        className="font-serif"
        fontSize="30"
        fontStyle="italic"
        fill="var(--color-cobalt)"
      >
        sy
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-14 sm:pt-20">
        <p className="label text-ink">
          <span aria-hidden="true" className="mr-2 inline-block size-1.5 -translate-y-0.5 rounded-full bg-cobalt" />
          Software Engineering · Product · Design
        </p>
        <LocalTime />
      </div>

      <h1
        id="hero-heading"
        className="hero-greeting mt-10 font-serif text-[clamp(4.25rem,14vw,13rem)] leading-[0.88] tracking-[-0.035em] sm:mt-14"
      >
        Hi, I&rsquo;m <em className="whitespace-nowrap">
          Shannon<span className="hero-dot not-italic text-cobalt">.</span>
        </em>
      </h1>

      <div className="mt-12 grid gap-10 border-b border-rule pb-16 sm:mt-16 lg:grid-cols-12 lg:pb-24">
        <div className="hidden lg:col-span-3 lg:block">
          <Stamp />
        </div>
        <div className="lg:col-span-6 lg:col-start-6">
          <p className="text-lg leading-relaxed text-pretty sm:text-[1.375rem] sm:leading-[1.55]">
            I studied computer science at Princeton, with minors in environmental studies and art history.
            I like building things, understanding how people use them, and exploring what happens when
            technology meets other disciplines.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <a
              href="#work"
              className="cta inline-flex items-center gap-3 border-b border-ink pb-1 text-base font-medium transition-colors hover:border-cobalt hover:text-cobalt"
            >
              Explore my work <span className="cta-arrow" aria-hidden="true">↓</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-1 text-base text-muted hover:text-cobalt"
            >
              View résumé <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
