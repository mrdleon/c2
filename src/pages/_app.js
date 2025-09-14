// src/pages/_app.js

import Layout from './components/Layout';
import '@/styles/globals.css';
import { Playfair_Display, Montserrat, Nunito } from 'next/font/google';

// 1. Konfigurasi Playfair Display (yang hilang)
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-heading',
});

// 2. Konfigurasi Montserrat (yang hilang)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

// 3. Konfigurasi Nunito (sudah ada)
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-nunito',
});

function MyApp({ Component, pageProps }) {
  // Gabungkan semua variabel font ke dalam className
  return (
    <main className={`${playfairDisplay.variable} ${montserrat.variable} ${nunito.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;