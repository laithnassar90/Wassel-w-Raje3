import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Car, 
  Search, 
  MessageCircle, 
  Bell, 
  CreditCard, 
  Settings, 
  User,
  TrendingUp,
  MapPin
} from 'lucide-react'
import { cn } from '@/lib/anima-utils'

interface SidebarItem {
  icon: React.ElementType
  label: string
  href: string
  badge?: number
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Search, label: 'Find Ride', href: '/find-ride' },
  { icon: Car, label: 'My Rides', href: '/rides' },
  { icon: MapPin, label: 'Offer Ride', href: '/offer-ride' },
  { icon: MessageCircle, label: 'Messages', href: '/messages', badge: 3 },
  { icon: Bell, label: 'Notifications', href: '/notifications', badge: 5 },
  { icon: CreditCard, label: 'Payments', href: '/payments' },
  { icon: TrendingUp, label: 'My Tips', href: '/tips' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' }
]

interface AnimaSidebarProps {
  className?: string
}

export function AnimaSidebar({ className }: AnimaSidebarProps) {
  const location = useLocation()

  return (
    <aside className={cn(
      "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-card overflow-y-auto",
      className
    )}>
      <div className="p-4">
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "text-muted-foreground"
                )}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                
                {item.badge && (
                  <span className={cn(
                    "rounded-full px-2 py-1 text-xs font-medium",
                    isActive 
                      ? "bg-primary-foreground text-primary" 
                      : "bg-primary text-primary-foreground"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
      
      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <div className="flex items-center space-x-3 p-3 rounded-md bg-muted">
          <div className="h-8 w-8 rounded-full bg-wassel-teal flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@wassel.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AnimaSidebar