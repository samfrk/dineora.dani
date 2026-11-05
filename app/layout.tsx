import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400','500','600','700'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400','500','600','700'] })

export const metadata: Metadata = { title: 'DINEORA — Every Table Has a Story', description: 'An experience beyond the table. Reserve your table at DINEORA.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#581F2B', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body className={`${cormorant.variable} ${dmSans.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
