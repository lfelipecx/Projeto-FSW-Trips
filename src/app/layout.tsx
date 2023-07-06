import './globals.css'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Full Stack Week Trips',
  description: 'Sistema de reserva de viagens',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />

          {children}

          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
