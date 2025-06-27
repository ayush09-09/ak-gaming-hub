const express = require('express');
const mongoose = require('mongoose'); // MongoDB ke liye mongoose import kiya
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string (yahan apna MongoDB URI daalein)
const mongoURI = 'mongodb://localhost:27017/akgaminghub'; // local MongoDB, agar Atlas use kar rahe hain toh URI change karein

mongoose.connect(process.env.MONGODB_URI);

.then(() => {
  console.log('MongoDB se connection ho gaya!');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware (agar zarurat ho toh yahan add karen)
// app.use(express.json());

// Static files serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Server chal raha hai!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on PORT: ${PORT}`);
});

