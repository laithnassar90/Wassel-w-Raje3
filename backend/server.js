const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/rides/search', async (req, res) => {
  const { from, to, date } = req.query;
  const mockRides = [
    {
      id: '1',
      from: from || 'Amman Downtown',
      to: to || 'Abdali',
      date: date || '2024-01-15',
      time: '09:00',
      driver: { name: 'Ahmad Al-Masri', avatar: 'https://i.pravatar.cc/150?img=12', rating: 4.8, trips: 120 },
      seatsAvailable: 3,
      price: 2.5,
      duration: '25m',
      zakkaSeats: 2
    },
    {
      id: '2',
      from: from || 'Amman',
      to: to || 'Zarqa',
      date: date || '2024-01-15',
      time: '10:30',
      driver: { name: 'Fatima Hassan', avatar: 'https://i.pravatar.cc/150?img=45', rating: 4.9, trips: 89 },
      seatsAvailable: 2,
      price: 3.0,
      duration: '35m',
      zakkaSeats: 1
    }
  ];
  res.json(mockRides);
});

app.post('/api/rides', async (req, res) => {
  res.json({ success: true, id: Date.now().toString(), ...req.body });
});

app.post('/api/rides/:id/join', async (req, res) => {
  res.json({ success: true, message: 'Ride joined successfully' });
});

app.get('/api/buses/routes', async (req, res) => {
  res.json([
    { id: '1', routeNumber: '101', name: 'Amman Downtown - Abdali', nameAr: 'وسط البلد - العبدلي', operator: 'Amman Bus', fare: 0.5, active: true },
    { id: '2', routeNumber: '205', name: 'Sweileh - University of Jordan', nameAr: 'صويلح - الجامعة الأردنية', operator: 'Amman Bus', fare: 0.5, active: true }
  ]);
});

app.get('/api/buses/stops', async (req, res) => {
  res.json([
    { id: '1', name: 'Downtown Station', nameAr: 'محطة وسط البلد', lat: 31.9539, lng: 35.9106, routeId: '1' },
    { id: '2', name: 'Abdali Station', nameAr: 'محطة العبدلي', lat: 31.9629, lng: 35.9106, routeId: '1' }
  ]);
});

app.get('/api/zakka/balance', async (req, res) => {
  res.json({ points: 450, level: 'Silver', nextLevel: 'Gold', pointsToNext: 550 });
});

app.get('/api/zakka/leaderboard', async (req, res) => {
  res.json([
    { rank: 1, name: 'Ahmad M.', points: 2450, ridesOffered: 89 },
    { rank: 2, name: 'Sara K.', points: 2100, ridesOffered: 76 },
    { rank: 3, name: 'Omar H.', points: 1890, ridesOffered: 65 }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Wassel Backend running on http://localhost:${PORT}`);
});
