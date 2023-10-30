import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header/header'
import Loader from './components/loader'
import { Suspense } from 'react'
import Footer from './components/footer'
import React from 'react'
import { Phudu } from "next/font/google";
export const metadata: Metadata = {
  title: 'DigiBaapp',
  description: '',
}

const phudu = Phudu({
  subsets: ['cyrillic-ext'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let fullFilled = false;
  let promise: Promise<void> | null = null;


  const useTimeout = (ms: number) => {
    if (!fullFilled) {
      throw promise ||= new Promise((res) => {
        setTimeout(() => {
          fullFilled = true;
          res();
        }, ms);
      });
    }
  };
  const Main = () => {
    useTimeout(1000);
    return <Header />
  };

  return (
    <html lang="en" className={phudu.className}>
      <body>
        <Suspense fallback={<Loader />}>
          <Main /> {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
