import { resumeUrl } from '@/data/experience';
import { site } from '@/data/site';
import { SectionLabel } from './SectionLabel';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-[1440px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-14 lg:pt-40">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionLabel number="04" name="Contact" />
          <h2 id="contact-heading" className="mt-6 font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.025em]">
            Get in <em>touch</em>
            <span className="text-cobalt">.</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-pretty lg:col-span-4 lg:col-start-9 lg:self-end">
          <p>I&rsquo;m exploring opportunities in product management, software, and creative technology for 2027.</p>
          <p className="text-muted">Always happy to connect about interesting projects, ideas, or opportunities.</p>
        </div>
      </div>

      <div className="mt-14 border-t border-ink pt-6 lg:mt-20">
        <ul className="flex flex-wrap gap-x-14 gap-y-4">
          {[
            { label: 'LinkedIn', href: site.linkedinUrl },
            { label: 'Résumé', href: resumeUrl },
          ].map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-4 font-serif text-4xl transition-colors hover:text-cobalt sm:text-5xl"
              >
                {link.label}
                <span aria-hidden="true" className="text-cobalt transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
