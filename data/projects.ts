// Project metadata lives here. Edit this file to add, reorder, or update work.
// Keep descriptions factual — don't add features or outcomes that aren't verified.

export type Link = { label: string; href: string };

export type Project = {
  id: string;
  number: string;
  title: string;
  /** Display label shown on the card, e.g. "Interaction Design · Art History". */
  category: string;
  year?: string;
  description: string;
  links: Link[];
  /** An award or publication, shown as a highlighted note on the card. */
  highlight?: { kind: 'Award' | 'Publication'; text: string; links?: Link[] };
  /**
   * A real screenshot of the project, stored in /public/projects.
   * Projects without one show a neutral "screenshot coming soon" placeholder.
   */
  image?: { src: string; alt: string; position?: string };
  /** A set of screens shown as a carousel instead of a single image. */
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: 'at-winds-wake',
    number: '01',
    title: 'At Wind’s Wake',
    category: 'Independent Research · Interactive Storytelling',
    year: '2026',
    description:
      'For my senior thesis, I traveled to fishing communities in Taiwan to understand how offshore wind development was affecting local livelihoods. I turned interviews, photography, and field research into an interactive multimedia experience, then tested it against a traditional photo essay with 43 participants.',
    links: [
      { label: 'Interactive experience', href: 'https://atwindswakemultimedia.vercel.app/' },
      { label: 'Photo essay', href: 'https://atwindswakephotoessay.vercel.app/' },
      { label: 'Thesis', href: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:161d5366-840d-45e9-bfed-f91e2879c369' },
      { label: 'Research poster', href: 'https://canva.link/rjtkwyn2xokift7' },
    ],
    highlight: {
      kind: 'Award',
      text: 'Princeton University Environmental Studies Book Prize in Engineering',
      links: [
        { label: 'Class Day 2026', href: 'https://environment.princeton.edu/news/class-day-2026/' },
        { label: 'Discovery Day 2026', href: 'https://environment.princeton.edu/news/discovery-day-2026/' },
        { label: 'Instagram', href: 'https://www.instagram.com/p/DZ-lKPtD_vh/' },
      ],
    },
    image: {
      src: '/projects/at-winds-wake.jpg',
      alt: 'Opening screen of the At Wind’s Wake multimedia site: a dark map of Taiwan beside the statistic “5th in the world for offshore wind capacity.”',
    },
  },
  {
    id: 'review-interface',
    number: '02',
    title: 'Reducing Entry-Point Friction in Review Interface Design',
    category: 'Human-Computer Interaction · UX Research · iOS Development',
    year: '2026',
    // Factual summary drawn from the paper's title and venue — expand with your own description.
    description:
      'Co-authored research on review interface design and extreme review polarization, published in the Extended Abstracts of ACM CHI 2026.',
    links: [
      { label: 'Read the paper', href: 'https://dl.acm.org/doi/10.1145/3772363.3798972' },
      { label: 'Research poster', href: 'https://canva.link/d7vpwhj5qea1qhl' },
    ],
  },
  {
    id: 'daily-princetonian-app',
    number: '03',
    title: 'The Daily Princetonian Mobile App',
    category: 'UI/UX Design · Figma',
    year: '2023',
    description:
      'As the sole designer, I championed the development of The Daily Prince app (Fall 2023 launch), featuring current and breaking news, events, dining menus, article notifications and bookmarks, and puzzles, serving 10K+ users to date.',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/the-daily-princetonian/id6461162604' }],
    gallery: [
      { src: '/projects/daily-princetonian/01-feed.png', alt: 'Figma mockup: News feed with top stories.' },
      { src: '/projects/daily-princetonian/02-article.png', alt: 'Figma mockup: Article view.' },
      { src: '/projects/daily-princetonian/03-search.png', alt: 'Figma mockup: Search with section categories.' },
      { src: '/projects/daily-princetonian/04-puzzles.png', alt: 'Figma mockup: Crossword puzzles.' },
      { src: '/projects/daily-princetonian/05-campus.png', alt: 'Figma mockup: Campus hub: menus, street, town, sports, events.' },
      { src: '/projects/daily-princetonian/06-dining.png', alt: 'Figma mockup: Dining hall menus by meal.' },
      { src: '/projects/daily-princetonian/07-dining-meals.png', alt: 'Figma mockup: Dining menus with breakfast, lunch, and dinner tabs.' },
      { src: '/projects/daily-princetonian/08-settings.png', alt: 'Figma mockup: Settings.' },
      { src: '/projects/daily-princetonian/09-notifications.png', alt: 'Figma mockup: Notification preferences by section.' },
    ],
  },
  {
    id: 'learnsync',
    number: '04',
    title: 'LearnSync',
    category: 'Software Development',
    year: '2024',
    description:
      'Designed and built an AI-powered scheduling platform that transforms freeform learning goals and deadlines into structured, conflict-aware study plans, leveraging GPT for task parsing and Google Calendar for real-time plan execution.',
    // NOTE: as of Oct 2026 this deployment returns Vercel's 404 DEPLOYMENT_NOT_FOUND. Redeploy or update the URL.
    links: [{ label: 'Visit site', href: 'https://learnsync-delta.vercel.app/' }],
  },
  {
    id: 'virtual-exhibit',
    number: '05',
    title: 'Native North American Art: A Virtual Exhibition',
    category: 'Interaction Design · Art History',
    description:
      'Built an interactive virtual recreation of Princeton University Art Museum’s Native North American Art gallery, with navigable viewpoints, clickable artworks, and Indigenous language audio. The project explores how digital exhibitions can expand access to art while acknowledging the cultural knowledge and relationships that can’t be fully captured on a screen.',
    links: [{ label: 'Enter the exhibition', href: 'https://art481-virtual-exhibit.vercel.app/' }],
    image: {
      src: '/projects/virtual-exhibit.jpg',
      alt: 'Landing page of the virtual exhibition: a Princeton University Art Museum gallery with the title “Native North American Art” and an “Enter the gallery” button.',
    },
  },
  {
    id: 'wonder-in-motion',
    number: '06',
    title: 'Wonder in Motion',
    category: 'Environmental Storytelling · Web Development',
    description:
      'A multimedia travel project exploring the landscapes, ecology, and cultural histories of three destinations in Taiwan: Sun Moon Lake, Alishan, and Jiufen.',
    links: [{ label: 'Visit site', href: 'https://wonderinmotion.vercel.app/' }],
    image: {
      src: '/projects/wonder-in-motion.jpg',
      alt: 'Opening screen of Wonder in Motion: the title over a deep green-to-teal background, subtitled “Taiwan tourism through an environmental lens.”',
    },
  },
  {
    id: 'blueberry-story',
    number: '07',
    title: 'How to Grow a Blueberry',
    category: 'Independent Research · Interactive Storytelling',
    year: '2025',
    description:
      'Co-authored six-chapter, multimedia climate story on Hammonton’s blueberry industry; coded website for publication.',
    links: [{ label: 'Visit site', href: 'https://blueberry-story.vercel.app/' }],
    image: {
      src: '/projects/blueberry-story.jpg',
      alt: 'Title page of How to Grow a Blueberry: ripe blueberries on a branch behind the title and author credits.',
    },
  },
];
