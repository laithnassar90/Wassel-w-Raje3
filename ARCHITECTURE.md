# 🚀 Wassel (واصل) — System Architecture

## 📐 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│  React PWA (Mobile-First)                                        │
│  ├─ Map UI (Google Maps API)                                     │
│  ├─ Ride Booking (Wassel واصل / Raje3 راجع)                     │
│  ├─ Bus Timetable Viewer                                         │
│  ├─ Zakka Rewards Dashboard                                      │
│  └─ Real-time Notifications (WebSocket)                          │
└─────────────────────────────────────────────────────────────────┘
                              ↕ HTTPS/WSS
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY LAYER                           │
├─────────────────────────────────────────────────────────────────┤
│  AWS API Gateway / Kong / NGINX                                  │
│  ├─ Rate Limiting                                                │
│  ├─ Authentication (JWT)                                         │
│  ├─ Request Routing                                              │
│  └─ Load Balancing                                               │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                    MICROSERVICES LAYER                           │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Auth Service │  │ Ride Service │  │ Bus Service  │          │
│  │ (Node.js)    │  │ (Node.js)    │  │ (Node.js)    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Zakka Service│  │ AI Engine    │  │ Payment Svc  │          │
│  │ (Node.js)    │  │ (Python)     │  │ (Node.js)    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Notification │  │ Analytics    │  │ Admin Panel  │          │
│  │ (Node.js)    │  │ (Python)     │  │ (React)      │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                 │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ PostgreSQL   │  │ Redis Cache  │  │ MongoDB      │          │
│  │ (Primary DB) │  │ (Sessions)   │  │ (Logs/Events)│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ S3 Storage   │  │ ElasticSearch│                             │
│  │ (Media)      │  │ (Search)     │                             │
│  └──────────────┘  └──────────────┘                             │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                             │
├─────────────────────────────────────────────────────────────────┤
│  Google Maps API | Twilio SMS | Firebase Push | Stripe/PayPal   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗄️ Data Models

### 1. User Model
```typescript
interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  nameAr?: string;
  avatar?: string;
  role: 'rider' | 'driver' | 'admin';
  verified: boolean;
  rating: number;
  totalTrips: number;
  zakkaPoints: number;
  zakkaLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  preferences: {
    language: 'en' | 'ar';
    notifications: boolean;
    autoRaje3: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### 2. Ride Model
```typescript
interface Ride {
  id: string;
  driverId: string;
  type: 'wassel' | 'raje3';
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  
  // Route details
  origin: {
    lat: number;
    lng: number;
    address: string;
    addressAr?: string;
  };
  destination: {
    lat: number;
    lng: number;
    address: string;
    addressAr?: string;
  };
  waypoints?: Array<{ lat: number; lng: number }>;
  
  // Scheduling
  departureTime: Date;
  estimatedArrival: Date;
  actualArrival?: Date;
  
  // Capacity & Pricing
  seatsTotal: number;
  seatsAvailable: number;
  zakkaSeats: number; // 0-6 seats offered for Zakka rewards
  basePrice: number;
  aiOptimizedPrice: number;
  currency: 'JOD';
  
  // Passengers
  passengers: Array<{
    userId: string;
    seatsBooked: number;
    status: 'confirmed' | 'cancelled';
    paidAmount: number;
  }>;
  
  // Raje3 specific
  returnRideId?: string; // Linked return trip
  
  // AI metadata
  aiScore: number; // Route optimization score
  demandMultiplier: number;
  
  createdAt: Date;
  updatedAt: Date;
}
```

### 3. Bus Schedule Model
```typescript
interface BusRoute {
  id: string;
  routeNumber: string;
  name: string;
  nameAr: string;
  operator: string;
  
  stops: Array<{
    id: string;
    name: string;
    nameAr: string;
    lat: number;
    lng: number;
    order: number;
    estimatedTime: number; // minutes from start
  }>;
  
  schedule: Array<{
    dayOfWeek: number; // 0-6
    departures: string[]; // ['06:00', '07:30', ...]
  }>;
  
  fare: number;
  active: boolean;
  updatedAt: Date;
}

interface BusLiveUpdate {
  routeId: string;
  busId: string;
  currentLat: number;
  currentLng: number;
  nextStopId: string;
  eta: Date;
  delay: number; // minutes
  occupancy: 'low' | 'medium' | 'high';
  timestamp: Date;
}
```

### 4. Zakka Rewards Model
```typescript
interface ZakkaTransaction {
  id: string;
  userId: string;
  type: 'earn' | 'redeem';
  points: number;
  reason: 'ride_offer' | 'ride_complete' | 'referral' | 'redemption';
  rideId?: string;
  metadata: {
    zakkaSeatsOffered?: number;
    passengerCount?: number;
  };
  createdAt: Date;
}

interface ZakkaReward {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  pointsCost: number;
  type: 'cash' | 'discount' | 'free_ride' | 'partner_offer';
  value: number; // e.g., 150 for $150
  available: boolean;
  expiresAt?: Date;
}

interface ZakkaLeaderboard {
  userId: string;
  userName: string;
  totalPoints: number;
  rank: number;
  monthlyPoints: number;
  ridesOffered: number;
  updatedAt: Date;
}
```

---

## 🔌 API Endpoints

### Authentication Service
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login with email/phone
POST   /api/auth/verify-otp        - Verify phone OTP
POST   /api/auth/refresh-token     - Refresh JWT
GET    /api/auth/me                - Get current user
PUT    /api/auth/profile           - Update profile
```

### Ride Service
```
GET    /api/rides/search           - Search available rides
POST   /api/rides                  - Create new ride (Wassel/Raje3)
GET    /api/rides/:id              - Get ride details
PUT    /api/rides/:id              - Update ride
DELETE /api/rides/:id              - Cancel ride
POST   /api/rides/:id/join         - Join a ride
POST   /api/rides/:id/leave        - Leave a ride
GET    /api/rides/my-rides         - Get user's rides (driver/passenger)
POST   /api/rides/ai-optimize      - Get AI-optimized route & pricing
```

### Bus Service
```
GET    /api/buses/routes           - Get all bus routes
GET    /api/buses/routes/:id       - Get specific route details
GET    /api/buses/stops            - Get all bus stops
GET    /api/buses/stops/:id/schedule - Get schedule for a stop
GET    /api/buses/live/:routeId    - Get live bus location
POST   /api/buses/routes           - [Admin] Create bus route
PUT    /api/buses/routes/:id       - [Admin] Update route
POST   /api/buses/live             - [Admin] Update live location
```

### Zakka Service
```
GET    /api/zakka/balance          - Get user's Zakka points
GET    /api/zakka/transactions     - Get transaction history
GET    /api/zakka/rewards          - Get available rewards
POST   /api/zakka/redeem           - Redeem points for reward
GET    /api/zakka/leaderboard      - Get top earners
POST   /api/zakka/calculate        - Calculate points for ride offer
```

### Payment Service
```
POST   /api/payments/create        - Create payment intent
POST   /api/payments/confirm       - Confirm payment
GET    /api/payments/history       - Get payment history
POST   /api/payments/payout        - Request driver payout
```

### Notification Service
```
GET    /api/notifications          - Get user notifications
PUT    /api/notifications/:id/read - Mark as read
POST   /api/notifications/subscribe - Subscribe to push notifications
WS     /ws/notifications           - WebSocket for real-time updates
```

### Analytics Service
```
GET    /api/analytics/dashboard    - [Admin] Platform metrics
GET    /api/analytics/rides        - [Admin] Ride statistics
GET    /api/analytics/revenue      - [Admin] Revenue reports
GET    /api/analytics/users        - [Admin] User growth
```

---

## 🤖 AI Engine Logic

### 1. Dynamic Pricing Algorithm
```python
def calculate_optimized_price(ride_data):
    """
    AI-based pricing that balances rider affordability & driver profit
    """
    base_price = calculate_distance_price(ride_data.distance)
    
    # Demand multiplier (time of day, day of week)
    demand_factor = get_demand_multiplier(
        ride_data.departure_time,
        ride_data.route
    )
    
    # Supply factor (available drivers in area)
    supply_factor = get_supply_factor(ride_data.origin)
    
    # Zakka incentive (more Zakka seats = lower price)
    zakka_discount = ride_data.zakka_seats * 0.05  # 5% per seat
    
    # Historical data (ML model prediction)
    ml_adjustment = predict_optimal_price(
        ride_data,
        historical_rides
    )
    
    optimized_price = (
        base_price * 
        demand_factor * 
        supply_factor * 
        (1 - zakka_discount) * 
        ml_adjustment
    )
    
    return {
        'price': round(optimized_price, 2),
        'driver_earnings': optimized_price * 0.85,  # 85% to driver
        'platform_fee': optimized_price * 0.15,
        'savings': base_price - optimized_price
    }
```

### 2. Route Optimization
```python
def optimize_route(origin, destination, waypoints=[]):
    """
    Find fastest route considering traffic, road conditions
    """
    # Use Google Maps Directions API with traffic model
    routes = get_google_routes(
        origin, 
        destination,
        waypoints,
        traffic_model='best_guess'
    )
    
    # Score each route
    scored_routes = []
    for route in routes:
        score = calculate_route_score(
            distance=route.distance,
            duration=route.duration,
            traffic_level=route.traffic,
            road_quality=get_road_quality(route.polyline)
        )
        scored_routes.append((route, score))
    
    # Return best route
    return max(scored_routes, key=lambda x: x[1])[0]
```

### 3. Zakka Points Calculation
```python
def calculate_zakka_points(ride):
    """
    Reward drivers for offering Zakka seats
    """
    base_points = 10  # Base points per ride
    
    # Points per Zakka seat offered
    zakka_points = ride.zakka_seats * 5
    
    # Bonus for full occupancy
    occupancy_bonus = 0
    if ride.seats_available == 0:
        occupancy_bonus = 20
    
    # Distance multiplier
    distance_multiplier = min(ride.distance_km / 10, 3)
    
    total_points = (
        (base_points + zakka_points + occupancy_bonus) * 
        distance_multiplier
    )
    
    return int(total_points)
```

### 4. Smart Matching Algorithm
```python
def match_riders_to_drivers(search_params):
    """
    Match riders with best available drivers
    """
    available_rides = get_available_rides(
        origin=search_params.origin,
        destination=search_params.destination,
        date=search_params.date,
        radius_km=10
    )
    
    scored_matches = []
    for ride in available_rides:
        score = calculate_match_score(
            price_score=1 - (ride.price / max_price),
            rating_score=ride.driver.rating / 5,
            detour_score=1 - (ride.detour_distance / ride.total_distance),
            time_score=calculate_time_proximity(
                search_params.preferred_time,
                ride.departure_time
            ),
            zakka_score=ride.zakka_seats / 6
        )
        scored_matches.append((ride, score))
    
    # Return top 10 matches
    return sorted(scored_matches, key=lambda x: x[1], reverse=True)[:10]
```

---

## 🎨 UI/UX Layout

### Mobile App Structure
```
┌─────────────────────────────────┐
│  [☰]  Wassel واصل      [🔔][👤] │  ← Header
├─────────────────────────────────┤
│                                 │
│     ┌─────────────────────┐    │
│     │                     │    │
│     │   GOOGLE MAP VIEW   │    │  ← Map (70% screen)
│     │   • Ride markers    │    │
│     │   • Bus markers     │    │
│     │   • User location   │    │
│     │                     │    │
│     └─────────────────────┘    │
│                                 │
├─────────────────────────────────┤
│  [📍 From] [📍 To] [📅 Date]   │  ← Quick Search
├─────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐      │
│  │ Wassel  │  │ Raje3   │      │  ← Mode Toggle
│  │ واصل    │  │ راجع    │      │
│  └─────────┘  └─────────┘      │
├─────────────────────────────────┤
│  🚗 Find Ride  |  🚙 Offer Ride │  ← Action Buttons
├─────────────────────────────────┤
│  🚌 Bus Schedule | ⭐ Zakka: 450│  ← Quick Access
└─────────────────────────────────┘
```

### Admin Dashboard Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Wassel Admin  [Analytics] [Rides] [Buses] [Users] [Zakka] │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Active   │ │ Today's  │ │ Revenue  │ │ Zakka    │      │
│  │ Rides    │ │ Users    │ │ JOD 2.4K │ │ Redeemed │      │
│  │   127    │ │   1,834  │ │          │ │   45K    │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐  ┌─────────────────────────┐  │
│  │  Live Map View          │  │  Recent Rides           │  │
│  │  • Active rides         │  │  • Ride #1234           │  │
│  │  • Bus locations        │  │  • Ride #1235           │  │
│  │  • Heatmap              │  │  • Ride #1236           │  │
│  └─────────────────────────┘  └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Analytics Charts (Revenue, Users, Rides)          │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack Recommendation

### Frontend
- **Framework**: React 18 + TypeScript (already in place)
- **Build Tool**: Vite (already configured)
- **State Management**: Zustand (already installed)
- **UI Components**: Radix UI + Tailwind CSS (already in place)
- **Maps**: Google Maps JavaScript API + @react-google-maps/api
- **Forms**: React Hook Form + Zod (already installed)
- **HTTP Client**: Axios + TanStack Query (already installed)
- **Real-time**: Socket.io-client
- **PWA**: Vite PWA Plugin

### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Express.js or Fastify
- **Language**: TypeScript
- **API Documentation**: Swagger/OpenAPI
- **Authentication**: JWT + Passport.js
- **Validation**: Zod
- **ORM**: Prisma or TypeORM

### AI/ML Services
- **Language**: Python 3.11+
- **Framework**: FastAPI
- **ML Libraries**: scikit-learn, TensorFlow Lite
- **Route Optimization**: Google OR-Tools
- **Deployment**: Docker containers

### Databases
- **Primary DB**: PostgreSQL 15 (ACID compliance, PostGIS for geo)
- **Cache**: Redis 7 (sessions, real-time data)
- **Search**: ElasticSearch 8 (ride search, autocomplete)
- **Analytics**: MongoDB (event logs, time-series data)

### Infrastructure
- **Cloud Provider**: AWS (recommended) or Azure
- **Compute**: ECS/EKS (Docker containers)
- **Storage**: S3 (user uploads, backups)
- **CDN**: CloudFront
- **Monitoring**: CloudWatch + Grafana
- **CI/CD**: GitHub Actions

### External Services
- **Maps**: Google Maps Platform (Directions, Places, Geocoding)
- **SMS**: Twilio or AWS SNS
- **Push Notifications**: Firebase Cloud Messaging
- **Payments**: Stripe or PayPal
- **Email**: SendGrid or AWS SES

---

## 💰 Monetization Plan

### Revenue Streams

1. **Platform Commission**
   - 15% fee on each ride
   - Driver keeps 85% of fare
   - Example: JOD 10 ride → Driver gets JOD 8.50

2. **Zakka Rewards Economy**
   - Drivers earn points by offering Zakka seats
   - 100 points = $150 cash value
   - Points redeemable for:
     - Cash payouts
     - Free rides
     - Partner discounts (restaurants, shops)
     - Premium features

3. **Premium Subscriptions**
   - **Rider Pro** (JOD 5/month):
     - Priority booking
     - No cancellation fees
     - 10% discount on all rides
   - **Driver Pro** (JOD 10/month):
     - Lower commission (10% instead of 15%)
     - Advanced analytics
     - Priority support

4. **Bus Partnership**
   - Commission from bus operators for digital ticketing
   - Advertising space in bus schedule views

5. **Advertising**
   - Sponsored ride suggestions
   - Banner ads in app (non-intrusive)
   - Partner promotions

### Zakka Points System

**Earning Points:**
- Offer 1 Zakka seat: 5 points per ride
- Offer 6 Zakka seats: 30 points per ride
- Complete ride with full occupancy: +20 bonus points
- Referral: 50 points per new driver
- High rating maintained (4.8+): 10 points/week

**Redemption:**
- 100 points = $150 cash
- 50 points = 1 free ride (up to JOD 10)
- 25 points = 20% discount voucher
- 200 points = Gold status (lower commission)

**Gamification:**
- Bronze (0-500 points): Standard benefits
- Silver (501-2000): 5% bonus on earnings
- Gold (2001-5000): 10% bonus + priority support
- Platinum (5000+): 15% bonus + exclusive perks

---

## 🚀 Implementation Phases

### Phase 1: MVP (Weeks 1-6)
- ✅ User authentication (email/phone)
- ✅ Basic ride creation (Wassel only)
- ✅ Ride search & booking
- ✅ Google Maps integration
- ✅ Payment processing
- ✅ Basic admin panel

### Phase 2: Core Features (Weeks 7-12)
- 🔄 Raje3 (return trip) functionality
- 🔄 Zakka rewards system
- 🔄 Real-time notifications
- 🔄 Driver ratings & reviews
- 🔄 AI-based pricing (basic)

### Phase 3: Bus Integration (Weeks 13-16)
- 🚌 Bus route database
- 🚌 Schedule management
- 🚌 Live bus tracking
- 🚌 Unified map view (rides + buses)

### Phase 4: AI & Optimization (Weeks 17-20)
- 🤖 Advanced AI pricing
- 🤖 Smart route optimization
- 🤖 Predictive analytics
- 🤖 Demand forecasting

### Phase 5: Scale & Polish (Weeks 21-24)
- 📈 Performance optimization
- 📈 Advanced analytics dashboard
- 📈 Multi-language support (Arabic/English)
- 📈 Marketing & launch

---

## 🔒 Security Best Practices

1. **Authentication**
   - JWT with short expiry (15 min access, 7 day refresh)
   - Phone OTP verification
   - Rate limiting on auth endpoints

2. **Data Protection**
   - Encrypt sensitive data at rest (AES-256)
   - HTTPS/TLS for all communications
   - PII anonymization in logs

3. **API Security**
   - API key authentication for admin endpoints
   - CORS configuration
   - Input validation (Zod schemas)
   - SQL injection prevention (parameterized queries)

4. **Payment Security**
   - PCI DSS compliance
   - Tokenization (never store card details)
   - 3D Secure authentication

5. **Monitoring**
   - Real-time intrusion detection
   - Automated security scanning
   - Regular penetration testing

---

## 📊 Success Metrics (KPIs)

- **User Growth**: 10,000 users in first 3 months
- **Ride Volume**: 500 rides/day by month 6
- **Zakka Engagement**: 60% of drivers offering Zakka seats
- **Platform Revenue**: JOD 50K/month by month 12
- **User Retention**: 70% monthly active users
- **Driver Satisfaction**: 4.5+ average rating
- **App Performance**: <2s page load, 99.9% uptime

---

**Built with ❤️ for Amman's mobility future**
