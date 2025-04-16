const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://172.31.26.107:27017/geico', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Mongoose model
const claimSchema = new mongoose.Schema({
  claimId: Number,
  status: String,
  assignedAgent: String
});

const Claim = mongoose.model('Claim', claimSchema);

// API endpoint
app.get('/api/claims', async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json(claims);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch claims' });
  }
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 API server running at http://0.0.0.0:${port}`);
});
