import Image from 'next/image';
import { aboutPhotos } from '@/data/site';
import { SectionLabel } from './SectionLabel';

// A scannable summary of the paragraphs above, styled like a catalog index.
const index = [
  { term: 'Studied', detail: 'BSE Computer Science, Princeton. Minors in Environmental Studies and History of Art.' },
  { term: 'Previously', detail: 'Software engineering at Amazon, consulting at PwC, HCI research.' },
  { term: 'Currently', detail: 'Fulbright in Taiwan, teaching English.' },
  { term: 'Off hours', detail: 'Running, scuba diving, taking photos, planning the next trip.' },
];

const tilts = ['-rotate-3', 'rotate-2 lg:mt-16', '-rotate-1 lg:mt-6'];

function CropMarks() {
  const corner = 'absolute size-3 border-muted/60';
  return (
    <span aria-hidden="true">
      <span className={`${corner} top-3 left-3 border-t border-l`} />
      <span className={`${corner} top-3 right-3 border-t border-r`} />
      <span className={`${corner} bottom-3 left-3 border-b border-l`} />
      <span className={`${corner} right-3 bottom-3 border-r border-b`} />
    </span>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel number="03" name="About" />
            <h2 id="about-heading" className="mt-6 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
              A little
              <br />
              <em>about me.</em>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-pretty lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p>
              I&rsquo;m a recent Princeton graduate with a BSE in Computer Science and minors in Environmental
              Studies and History of Art.
            </p>
            <p>
              My work has taken me from software engineering at Amazon to consulting at PwC, HCI research, and
              interviewing fishing communities in Taiwan for my senior thesis. I&rsquo;ve worked on everything from
              internal engineering tools to interactive websites, and I enjoy figuring out what people need and
              building something useful around it.
            </p>
            <p>
              I&rsquo;m currently in Taiwan on a Fulbright, teaching English and exploring the island whenever I
              can. Outside of work, you&rsquo;ll usually find me running, scuba diving, taking photos, or planning
              my next trip.
            </p>
          </div>
        </div>
        {/*  <ul className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6 lg:mt-28 lg:gap-14 lg:px-[12%]">
          {aboutPhotos.map((photo, i) => (
            <li key={photo.caption} className={`photo-slot max-w-[78%] max-sm:even:ml-auto sm:max-w-none ${tilts[i % tilts.length]}`}>
              <figure className="bg-paper p-3 pb-4 shadow-[0_1px_0_rgb(0_0_0/0.06),0_14px_30px_-18px_rgb(0_0_0/0.35)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e0d9c8]">
                  {photo.src ? (
                    <Image src={photo.src} alt={photo.alt ?? ''} fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover" />
                  ) : (
                    <>
                      <CropMarks />
                      <span className="label absolute inset-0 flex items-center justify-center text-[0.625rem] text-muted">
                        Photo to come
                      </span>
                    </>
                  )}
                </div>
                <figcaption className="mt-3 flex justify-between font-serif text-lg italic">
                  {photo.caption}
                  <span className="label not-italic text-[0.625rem] text-muted">{String(i + 1).padStart(2, '0')}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        
         <dl className="mt-20 grid gap-x-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {index.map(item => (
            <div key={item.term} className="border-t border-ink py-5">
              <dt className="label text-cobalt">{item.term}</dt>
              <dd className="mt-3 text-[0.975rem] leading-relaxed">{item.detail}</dd>
            </div>
          ))}
        </dl>

        */}
      </div>
    </section>
  );
}
