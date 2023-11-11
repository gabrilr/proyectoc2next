import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Manager',
  description: 'Task Manager app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: "radial-gradient(circle, rgba(233,255,254,1) 0%, rgba(174,222,253,1) 100%)"}} >
        {children}
      </body>
    </html>
  )
}
