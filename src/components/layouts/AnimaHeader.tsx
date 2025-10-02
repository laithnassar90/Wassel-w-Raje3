import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Bell, User, Search } from 'lucide-react'
import { AnimaButton } from '@/components/ui/anima-button'
import { AnimaInput } from '@/components/ui/anima-input'
import { cn } from '@/lib/anima-utils'

interface AnimaHeaderProps {
  className?: string
}

export function AnimaHeader({ className }: AnimaHeaderProps) {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="flex h-full items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <AnimaButton variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </AnimaButton>
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-wassel-teal flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-lg text-wassel-teal">Wassel</span>
          </Link>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <AnimaInput 
              placeholder="Search rides, destinations..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <AnimaButton variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </AnimaButton>
          
          <AnimaButton variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </AnimaButton>
          
          <AnimaButton variant="wassel" size="sm">
            Offer Ride
          </AnimaButton>
        </div>
      </div>
    </header>
  )
}

export default AnimaHeader