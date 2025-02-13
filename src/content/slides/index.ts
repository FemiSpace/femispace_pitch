import { intro } from './intro'
import { problem } from './problem'
import { solution } from './solution'
import { market } from './market'
import { gtmBusiness } from './gtm-business'
import { whyMe } from './why-me'
import { traction } from './traction'
import { competition } from './competition'
import { financials } from './financials'
import { team } from './team'
import { funding } from './funding'
import { milestones } from './milestones'
import { contacts } from './contacts'

// This allows us to modify individual section content independently
export const slideContent = {
  intro,
  problem,
  solution,
  market,
  gtmBusiness,
  whyMe,
  traction,
  competition,
  financials,
  team,
  funding,
  milestones,
  contacts
}

// This defines the order and metadata for each section
export const slideSections = [
  { id: 'intro', name: 'Intro', component: 'IntroSlide' },
  { id: 'problem', name: 'Problem', component: 'ProblemSlide' },
  { id: 'solution', name: 'Solution', component: 'SolutionSlide' },
  { id: 'market', name: 'Market', component: 'MarketSlide' },
  { id: 'gtmBusiness', name: 'GTM & Business', component: 'GTMSlide' },
  { id: 'whyMe', name: 'Why Me', component: 'WhyMeSlide' },
  { id: 'traction', name: 'Traction', component: 'TractionSlide' },
  { id: 'competition', name: 'Competition', component: 'CompetitionSlide' },
  { id: 'financials', name: 'Financials', component: 'FinancialsSlide' },
  { id: 'team', name: 'Team', component: 'TeamSlide' },
  { id: 'funding', name: 'Funding', component: 'FundingSlide' },
  { id: 'milestones', name: 'Milestones', component: 'MilestonesSlide' },
  { id: 'contacts', name: 'Contacts', component: 'ContactsSlide' }
]
