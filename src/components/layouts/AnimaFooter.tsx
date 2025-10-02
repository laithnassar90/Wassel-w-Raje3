import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/anima-utils'

interface AnimaFooterProps {
  className?: string
}

export function AnimaFooter({ className }: AnimaFooterProps) {
  return (
    <footer className={cn(
      "border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-wassel-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-lg text-wassel-teal">Wassel</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting riders and drivers for safe, affordable transportation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/find-ride" className="block text-sm text-muted-foreground hover:text-foreground">
                Find a Ride
              </Link>
              <Link to="/offer-ride" className="block text-sm text-muted-foreground hover:text-foreground">
                Offer a Ride
              </Link>
              <Link to="/safety" className="block text-sm text-muted-foreground hover:text-foreground">
                Safety
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <nav className="space-y-2">
              <Link to="/help" className="block text-sm text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <nav className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="block text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Wassel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default AnimaFooter