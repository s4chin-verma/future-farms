import { Inter, Roboto, Poppins, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
  style: 'normal',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  style: 'normal',
});
