import React from 'react'
import { cn } from '@/lib/anima-utils'
import { AnimaSidebar } from './AnimaSidebar'
import { AnimaHeader } from './AnimaHeader'
import { AnimaFooter } from './AnimaFooter'

interface AnimaLayoutProps {
  children: React.ReactNode
  className?: string
  showSidebar?: boolean
  showHeader?: boolean
  showFooter?: boolean
}

export function AnimaLayout({ 
  children, 
  className,
  showSidebar = true,
  showHeader = true,
  showFooter = true
}: AnimaLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {showHeader && <AnimaHeader />}
      
      <div className="flex flex-1">
        {showSidebar && <AnimaSidebar />}
        
        <main className={cn(
          "flex-1 overflow-auto",
          showSidebar ? "ml-64" : "",
          showHeader ? "pt-16" : ""
        )}>
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
      
      {showFooter && <AnimaFooter />}
    </div>
  )
}

export default AnimaLayout