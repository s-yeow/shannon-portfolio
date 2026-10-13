import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { SiteHeader } from '@/components/SiteHeader';
import { WorkSection } from '@/components/WorkSection';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <WorkSection />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="mx-auto mt-24 flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:mt-32 lg:px-14">
        <div className="flex w-full items-center justify-between border-t border-rule py-8 text-sm text-muted">
          <p>© 2026 Shannon Yeow</p>
          <a href="#top" className="link-underline hover:text-cobalt">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
