import Header from '@/components/layouts/header'
import Sidebar from '@/components/layouts/sidebar'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
            <Header />
            <main className={cn("w-full h-full overflow-x-hidden")}>{children}</main>
        </div>
    )
}

export default MainLayout