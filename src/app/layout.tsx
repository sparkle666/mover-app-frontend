import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer';


interface User {
  is_authenticated: boolean,
  first_name: string
}
const user: User = {
  is_authenticated: false,
  first_name: "Sixtus"
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mover',
  description: 'An app that connects people to large, mini vehicles to move their items',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
