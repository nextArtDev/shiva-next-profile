import Navbar from './components/Navbar'
import './globals.css'

import localFont from 'next/font/local'

const primaryFont = localFont({
  src: '../public/fonts/farsi.woff2',
  variable: '--font-sans',
})
const secondaryFont = localFont({
  src: '../public/fonts/FarhangVariable.woff',
  variable: '--font-farh',
})
const ternaryFont = localFont({
  src: '../public/fonts/Rokh-Normal.woff2',
  variable: '--font-rokh',
})
const numericFont = localFont({
  src: '../public/fonts/farsiNum-Regular.woff2',
  variable: '--font-adad',
})
export const metadata = {
  title: 'دکتر شیوا توتونیان',
  description:
    'وبسایت رسمی دکتر شیوا تتوتونیان متخصص زنان، زایمان، نازایی و جراحی‌های زیبایی زنان',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${primaryFont.variable} bg-black text-white adad `}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
