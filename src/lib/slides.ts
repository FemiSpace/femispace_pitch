import { Slide } from '@/types/slide'
import TitleSlide from '@/components/TitleSlide'
import ProblemSlide from '@/components/ProblemSlide'
import ProblemDefinitionSlide from '@/components/ProblemDefinitionSlide'
import MeetKat from '@/components/MeetKat'
import SystemIssuesSlide from '@/components/SystemIssuesSlide'
import BiologicalGrail from '@/components/BiologicalGrail'
import MarketSlide from '@/components/MarketSlide'
import FemiApp from '@/components/FemiApp'
import GTMBusinessSlide from '@/components/GTMBusinessSlide'
import WhyMeSlide from '@/components/WhyMeSlide'
import TractionSlide from '@/components/TractionSlide'
import CompetitionSlide from '@/components/CompetitionSlide'
import FinancialSlide from '@/components/FinancialSlide'
import TeamSlide from '@/components/TeamSlide'

export const slides: Slide[] = [
  {
    id: 'intro',
    title: 'Intro',
    component: TitleSlide,
    layout: 'hero',
    content: ''
  },
  {
    id: 'problem',
    title: 'Problem',
    component: ProblemSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'problem-definition',
    title: 'Problem Definition',
    component: ProblemDefinitionSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'meet-kat',
    title: 'Meet Kat',
    component: MeetKat,
    layout: 'standard',
    content: ''
  },
  {
    id: 'system-issues',
    title: 'System Issues',
    component: SystemIssuesSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'biological-grail',
    title: 'Biological Grail',
    component: BiologicalGrail,
    layout: 'standard',
    content: ''
  },
  {
    id: 'market',
    title: 'Market',
    component: MarketSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'femi-app',
    title: 'FemiApp',
    component: FemiApp,
    layout: 'standard',
    content: ''
  },
  {
    id: 'gtm-business',
    title: 'GTM & Business',
    component: GTMBusinessSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'why-me',
    title: 'Why Me',
    component: WhyMeSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'traction',
    title: 'Traction',
    component: TractionSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'competition',
    title: 'Competition',
    component: CompetitionSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'financials',
    title: 'Financials',
    component: FinancialSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'team',
    title: 'Team',
    component: TeamSlide,
    layout: 'standard',
    content: ''
  },
  {
    id: 'funding',
    title: 'Funding',
    component: () => <div className="text-white">Funding Section Coming Soon</div>,
    layout: 'standard',
    content: ''
  },
  {
    id: 'milestones',
    title: 'Milestones',
    component: () => <div className="text-white">Milestones Section Coming Soon</div>,
    layout: 'standard',
    content: ''
  },
  {
    id: 'contact',
    title: 'Contact',
    component: () => <div className="text-white">Contact Section Coming Soon</div>,
    layout: 'standard',
    content: ''
  }
]
