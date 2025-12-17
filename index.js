
const path = require('path');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'snk-secret',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/lifafa', require('./routes/lifafa'));
app.use('/api/wallet', require('./routes/wallet'));
app.use('/api/withdraw', require('./routes/withdraw'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/payout', require('./routes/payout'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/public/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/user/index.html'));
});

app.get('/public/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/index.html'));
});

app.get('/public/creator', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/creator/index.html'));
});


const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => console.log('SNK Lifafa Army running on port ' + PORT));
