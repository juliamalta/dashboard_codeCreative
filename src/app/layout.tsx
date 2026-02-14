import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

import { configs } from '@/configs'
import { cn } from '@/lib/utils'
import SideBarNavigation from '@/components/sections/SideBar/SideBar'
import { SidebarProvider } from '@/components/ui/sidebar'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})

export const metadata: Metadata = configs.metadata

type RootLayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn('min-h-screen bg-background antialiased', manrope.className)}>
                <SidebarProvider>
                    <SideBarNavigation />
                    <main>{children}</main>
                </SidebarProvider>
            </body>
        </html>
    )
}
