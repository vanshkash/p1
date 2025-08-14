require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using .env variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  location: String,
  eventType: String,
  requests: String,
});

const Booking = mongoose.model('Bookings', bookingSchema);

// POST route to save booking
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// Use PORT from .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));