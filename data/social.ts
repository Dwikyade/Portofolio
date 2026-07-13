export interface SocialLink {
  label: string;
  href: string;
  icon: 'mail' | 'linkedin' | 'github' | 'instagram' | 'whatsapp';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:dwiky@example.com',
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dwiky',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dwiky',
    icon: 'github',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/dwiky',
    icon: 'instagram',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6281234567890',
    icon: 'whatsapp',
  },
];

export const CONTACT_EMAIL = 'dwiky@example.com';
