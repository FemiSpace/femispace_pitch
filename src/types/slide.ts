export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'slide-in-left';
  audioFile?: string;
  backgroundColor?: string;
  layout?: 'left' | 'right' | 'center' | 'split';
  metrics?: {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
  }[];
}

export interface SlideSection {
  id: string;
  title: string;
  slides: Slide[];
}
