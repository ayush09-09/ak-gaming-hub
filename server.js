const express = require('express');
const mongoose = require('mongoose'); // MongoDB ke liye mongoose import kiya
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string (yahan apna MongoDB URI daalein)
const mongoURI = 'mongodb://localhost:27017/akgaminghub'; // local MongoDB, agar Atlas use kar rahe hain toh URI change karein

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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

app.listen(port, () => {
  console.log(`Server http://localhost:${port} pe chal raha hai`);
});
