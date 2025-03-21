import { Geist, Geist_Mono } from "next/font/google"
import "./_style/globals.css"
import Header from "./_components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Hami Team",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="antialiased min-h-screen gradient-back text-slate-200 flex flex-col gap-4 mx-auto px-4 md:px-8  my-8">
        <Header />
        <main className="flex-grow text-center">{children}</main>
      </body>
    </html>
  )
}
