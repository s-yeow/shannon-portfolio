// Site-wide copy and links that aren't project-specific.

export const site = {
  name: 'Shannon Yeow',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  linkedinUrl: 'https://www.linkedin.com/in/shannon-yeow/',
};

/**
 * Photo slots in the About section. Add a `src` (a file in /public/about) and
 * descriptive `alt` text to replace a placeholder with a real photo.
 */
export const aboutPhotos: { caption: string; src?: string; alt?: string }[] = [
  { caption: 'Fieldwork, Taiwan' },
  { caption: 'Underwater' },
  { caption: 'Somewhere new' },
];
