export interface SlideContent {
  title?: string
  subtitle?: string
  points?: string[]
  images?: {
    src: string
    alt: string
  }[]
  charts?: {
    type: 'bar' | 'line' | 'pie'
    data: any
  }[]
  customContent?: any
  animations?: {
    type: string
    duration: number
    delay?: number
  }[]
  audio?: string
}

export interface SlideSection {
  id: string
  name: string
  component: string
  content?: SlideContent
  subSlides?: SlideContent[]
}
