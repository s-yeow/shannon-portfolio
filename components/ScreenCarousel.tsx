'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';

type Screen = NonNullable<Project['gallery']>[number];

export function ScreenCarousel({ title, screens }: { title: string; screens: Screen[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Move roughly one "page" of screens at a time.
  const step = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' });
  };

  const button =
    'flex size-9 items-center justify-center rounded-full border border-ink/20 bg-paper text-ink transition-colors hover:border-cobalt hover:text-cobalt disabled:pointer-events-none disabled:opacity-35';

  return (
    <div className="absolute inset-0 flex flex-col bg-paper-deep" role="region" aria-roledescription="carousel" aria-label={`${title} screens`}>
      <ul
        ref={track}
        onScroll={update}
        tabIndex={0}
        aria-label="Screens, scroll horizontally"
        className="no-scrollbar flex min-h-0 flex-1 snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-px-6 px-6 pt-6"
      >
        {screens.map((screen, i) => (
          <li key={screen.src} className="h-full shrink-0 snap-start" aria-roledescription="slide" aria-label={`${i + 1} of ${screens.length}`}>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={142}
              height={303}
              className="h-full w-auto rounded-lg border border-ink/10 bg-white shadow-[0_10px_24px_-14px_rgb(0_0_0/0.45)]"
            />
          </li>
        ))}
        <li aria-hidden="true" className="w-2 shrink-0" />
      </ul>
      <div className="flex items-center justify-between px-6 py-4">
        <span className="label text-[0.625rem] text-muted">{screens.length} screens · Figma</span>
        <div className="flex gap-2">
          <button type="button" className={button} onClick={() => step(-1)} disabled={atStart} aria-label="Previous screens">
            ←
          </button>
          <button type="button" className={button} onClick={() => step(1)} disabled={atEnd} aria-label="Next screens">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
