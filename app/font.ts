import { Audiowide, Overlock_SC } from 'next/font/google';

// Primary font: Bruno Ace
export const audiowide = Audiowide({
  weight: ['400'], // Bruno Ace only comes in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-audiowide',
});

// Secondary font: Overlock SC
export const overlockSC = Overlock_SC({
  weight: ['400'], // Overlock SC only comes in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-overlock-sc',
});