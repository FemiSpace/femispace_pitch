export const menuItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'problem-definition', label: 'Problem Definition' },
  { id: 'meet-kat', label: 'Meet Kat' },
  { id: 'system-issues', label: 'System Issues' },
  { id: 'solution', label: 'Solution' },
  { id: 'market', label: 'Market' },
  { id: 'femiapp', label: 'FemiApp' },
  { id: 'gtm', label: 'GTM & Business' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'traction', label: 'Traction' },
  { id: 'competition', label: 'Competition' },
  { id: 'financials', label: 'Financials' },
  { id: 'team', label: 'Team' },
  { id: 'funding', label: 'Funding' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'contact', label: 'Contact' }
] as const;

export type MenuItemId = typeof menuItems[number]['id'];
