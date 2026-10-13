'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/site';

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  // Mark the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = site.nav
      .map(item => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a href="#top" className="font-serif text-[1.45rem] leading-none tracking-tight" aria-label={`${site.name}, back to top`}>
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden" aria-hidden="true">
            S<span className="text-cobalt">.</span>Y
          </span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-[1.15rem] sm:gap-9">
            {site.nav.map(item => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className="group relative py-2 text-sm transition-colors hover:text-cobalt"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -left-3 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-cobalt transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
